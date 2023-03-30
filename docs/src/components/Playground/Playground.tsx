import React, { ComponentType, useCallback, useReducer } from 'react';
import Box from '@mui/material/Box';
import ComponentPreview from './ComponentPreview';
import PlaygroundControls from './PlaygroundControls';
import { PlaygroundComponent, PlaygroundComponentProp } from './types';
import SourceCodeViewer from './SourceCodeViewer';
import { findStringIndex } from './utilities';

type PlaygroundProps = {
    config: PlaygroundComponent;
    playgroundDrawerWidth?: number;
    demoComponent: any;
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
        case PLAYGROUND_ACTIONS.RESET_PROPS:
            return { ...state };
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
    const { demoComponent, config, playgroundDrawerWidth = 375 } = props;
    const [state, dispatch] = useReducer(playgroundReducer, getInitialState(config));

    React.useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('state: ', state);
    }, [state]);

    const getCoreComponentProps = useCallback((): any => {
        const propKeyValuePairs: any = {};
        const propsWithMapping: PlaygroundComponentProp[] = [];

        config?.props?.forEach((prop: PlaygroundComponentProp) => {
            if (prop.propType === 'JSX.Element') {
                propsWithMapping.push(prop);
            } else {
                propKeyValuePairs[prop.propName] = prop.inputValue;
            }
        });

        config?.sharedProps?.forEach((prop: PlaygroundComponentProp) => {
            if (prop.propType === 'JSX.Element') {
                propsWithMapping.push(prop);
            } else {
                propKeyValuePairs[prop.propName] = prop.inputValue;
            }
        });

        // config?.additionalProps?.forEach((prop: PlaygroundComponentProp) => {
        //     if (prop.propType === 'JSX.Element') {
        //         JSXProps.push(prop);
        //     } else {
        //         propKeyValuePairs[prop.propName] = prop.inputValue;
        //     }
        // });

        // Mapping for select-inputs whose need values mapped to the provided options strings
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

    const PreviewContent = React.createElement(demoComponent, getCoreComponentProps());

    type GenericProps = {
        [key: string]: any;
    };

    function generateComponentCode<T extends ComponentType>(
        _componentName: string,
        _component: T,
        _props: GenericProps
    ): string {
        const propsString = Object.entries(_props)
            .map(([key, value]) => {
                const valueString = typeof value === 'string' ? `'${value}'` : `{${value}}`;
                return `${key}=${valueString}`;
            })
            .join(' ');

        const exampleCode = `<${_componentName} ${propsString} />`;

        return exampleCode;
    }

    const sourceCode = generateComponentCode(
        config.componentName?.split(' ').join('') as string | 'Component',
        PreviewContent as unknown as ComponentType<any>,
        getCoreComponentProps()
    );

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingRight: `${playgroundDrawerWidth}px`,
                }}
            >
                <ComponentPreview previewContent={PreviewContent} sx={{ flex: 7 }} />
                <SourceCodeViewer code={sourceCode} sx={{ flex: 3 }} />
            </Box>
            <PlaygroundControls config={config} playgroundDrawerWidth={playgroundDrawerWidth} dispatch={dispatch} />
        </Box>
    );
};
