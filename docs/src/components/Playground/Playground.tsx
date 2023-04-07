/* eslint-disable no-console */
import React, { useCallback, useReducer } from 'react';
import { renderToString } from 'react-dom/server';
import Box from '@mui/material/Box';
import ComponentPreview from './ComponentPreview';
import PlaygroundControls from './PlaygroundControls';
import { PlaygroundComponent, PlaygroundComponentProp } from './types';
import SourceCodeViewer from './SourceCodeViewer';
import { findStringIndex } from './utilities';
import { SxProps } from '@mui/material';

type PlaygroundProps = {
    /** The component to be rendered in the playground */
    demoComponent: any;
    /** An object with the props that should be added to the demoComponent
     *
     * Default: {}
     */
    demoComponentProps?: any;
    /** An element to be rendered as the child of the demoComponent */
    demoComponentChild?: JSX.Element;
    /** Configuration object for the playground */
    config: PlaygroundComponent;
    /** The width of the playground controls drawer
     *
     * Default: 375
     */
    playgroundDrawerWidth?: number;
    /** Styles applied to the root */
    sx?: SxProps;
    /** Styles applied to the container where the component is rendered */
    previewContainerSx?: SxProps;
    /** Styles applied to the container where the source code snippet is generated */
    sourceCodeSx?: SxProps;
    /** Styles applied to the drawer that contains the playground controls */
    controlsDrawerSx?: SxProps;
};

export const PLAYGROUND_ACTIONS = {
    RESET_PROPS: 'resetProps',
    UPDATE_PROP: 'updateProp',
    UPDATE_SHARED_PROP: 'updateSharedProp',
    UPDATE_ADDITIONAL_PROP: 'updateAdditionalProp',
    UPDATE_CHILD_COMPONENT_PROP: 'updateChildComponentProp',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function playgroundReducer(state: any, action: any) {
    switch (action.type) {
        case PLAYGROUND_ACTIONS.RESET_PROPS: {
            return { ...state };
        }
        case PLAYGROUND_ACTIONS.UPDATE_PROP: {
            const updatedControl = state?.props?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
            return { ...state, ...updatedControl };
        }
        case PLAYGROUND_ACTIONS.UPDATE_SHARED_PROP: {
            const updatedControl = state?.sharedProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
            return { ...state, ...updatedControl };
        }
        case PLAYGROUND_ACTIONS.UPDATE_ADDITIONAL_PROP: {
            const updatedControl = state?.additionalProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
            return { ...state, ...updatedControl };
        }
        case PLAYGROUND_ACTIONS.UPDATE_CHILD_COMPONENT_PROP: {
            const updatedControl = state?.childComponent?.childComponentProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
            return { ...state, ...updatedControl };
        }
        default:
            throw new Error();
    }
}

function getInitialState(config: PlaygroundComponent): any {
    return config;
}

export const Playground: React.FC<PlaygroundProps> = (props): JSX.Element => {
    const {
        demoComponent,
        demoComponentProps = {},
        demoComponentChild,
        config,
        playgroundDrawerWidth = 375,
        sx,
        previewContainerSx,
        sourceCodeSx,
        controlsDrawerSx,
    } = props;
    const [state, dispatch] = useReducer(playgroundReducer, getInitialState(config));

    const getFullPropObjectByPropName = useCallback(
        (propName: string): PlaygroundComponentProp | undefined =>
            state?.props?.filter((prop: PlaygroundComponentProp) => prop.propName === propName)[0],
        [state]
    );

    const getCoreComponentProps = useCallback((): any => {
        const propKeyValuePairs: any = {};
        const propsWithMapping: PlaygroundComponentProp[] = [];

        state?.props?.forEach((prop: PlaygroundComponentProp) => {
            if (!prop.inputValue || prop.inputValue === 'undefined') return;

            if (prop.propType === 'JSX.Element') {
                propsWithMapping.push(prop);
            } else {
                propKeyValuePairs[prop.propName] = prop.inputValue;
            }
        });

        state?.sharedProps?.forEach((prop: PlaygroundComponentProp) => {
            if (prop.propType === 'JSX.Element') {
                propsWithMapping.push(prop);
            } else {
                propKeyValuePairs[prop.propName] = prop.inputValue;
            }
        });

        // @TODO: This will require updates to the config type definition so that users can associate props to the correct components
        // state?.additionalProps?.forEach((prop: PlaygroundComponentProp) => {
        //     if (prop.propType === 'JSX.Element') {
        //         JSXProps.push(prop);
        //     } else {
        //         propKeyValuePairs[prop.propName] = prop.inputValue;
        //     }
        // });

        // Map prop.options to prop.optionsValueMapping for select-inputs whose values need mapped
        propsWithMapping.forEach((prop: PlaygroundComponentProp) => {
            if (prop.inputType === 'select' && prop.options?.length && prop.optionsValueMapping?.length) {
                propKeyValuePairs[prop.propName] =
                    prop.optionsValueMapping[findStringIndex(prop.options, prop.inputValue as string)];
            }
        });

        // eslint-disable-next-line no-console
        console.log('propKeyValuePairs:', propKeyValuePairs);

        return propKeyValuePairs;
    }, [state]);

    const PreviewContent = React.createElement(
        demoComponent,
        { ...getCoreComponentProps(), ...demoComponentProps },
        demoComponentChild ? demoComponentChild : undefined
    );

    type GenericProps = {
        [key: string]: any;
    };

    const generateComponentCode = (_componentName: string, _props?: GenericProps): string => {
        // Used to add empty space for new lines in the code window
        const newLineSpacing = `    `;
        let exampleCode = `<${_componentName} />`;

        if (_props) {
            // find all props that have a defaultValue
            const propsWithDefaults: PlaygroundComponentProp[] = state?.props?.filter(
                (prop: PlaygroundComponentProp) => prop.defaultValue
            );

            // remove all _props that are using the default value
            // @TODO: Update to deal with props that use JSX.Element or select value mappings
            propsWithDefaults?.forEach((propWithDefault) => {
                if (propWithDefault.defaultValue === _props[propWithDefault.propName]) {
                    delete _props[propWithDefault.propName];
                }
            });

            const propsString = Object.entries(_props)
                .map(([propName, currentValue]) => {
                    switch (typeof currentValue) {
                        case undefined:
                            return '';
                        case 'string':
                            return `${propName}={"${currentValue}"}`;
                        case 'object': {
                            const fullPropObject = getFullPropObjectByPropName(propName);
                            if (fullPropObject?.propType === 'JSX.Element') {
                                const subComponentCode =
                                    fullPropObject &&
                                    fullPropObject.inputValue &&
                                    fullPropObject.inputValue !== undefined
                                        ? generateComponentCode(fullPropObject.inputValue as string)
                                        : '';
                                return subComponentCode ? `${propName}={${subComponentCode}}` : '';
                            }

                            return `${propName}={${currentValue}}`;
                        }
                        case 'boolean':
                        case 'number':
                        default:
                            return `${propName}={${currentValue}}`;
                    }
                })
                .join(`\n${newLineSpacing}`);

            const exampleCodeSuffix = demoComponentChild
                ? `>\n${newLineSpacing}${renderToString(demoComponentChild)}\n/>`
                : `\n/>`;

            exampleCode = `<${_componentName}\n${newLineSpacing}${propsString}${exampleCodeSuffix}`;
        }

        return exampleCode;
    };

    const getSourceCode = useCallback(
        (): string =>
            generateComponentCode(
                state.componentName?.split(' ').join('') as string | 'Component',
                getCoreComponentProps()
            ),
        [state]
    );

    React.useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('state: ', state);
    }, [state]);

    return (
        <Box
            sx={[
                {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingRight: `${playgroundDrawerWidth}px`,
                }}
            >
                <ComponentPreview
                    previewContent={PreviewContent}
                    sx={[
                        { flex: 7 },
                        ...(Array.isArray(previewContainerSx) ? previewContainerSx : [previewContainerSx]),
                    ]}
                />
                <SourceCodeViewer
                    code={getSourceCode()}
                    sx={[{ flex: 3 }, ...(Array.isArray(sourceCodeSx) ? sourceCodeSx : [sourceCodeSx])]}
                />
            </Box>
            <PlaygroundControls
                config={config}
                playgroundDrawerWidth={playgroundDrawerWidth}
                dispatch={dispatch}
                sx={[...(Array.isArray(controlsDrawerSx) ? controlsDrawerSx : [controlsDrawerSx])]}
            />
        </Box>
    );
};
