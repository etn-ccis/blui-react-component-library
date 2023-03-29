import React, { useCallback, useReducer } from 'react';
import Box from '@mui/material/Box';
import ComponentPreview from './ComponentPreview';
import PlaygroundControls from './PlaygroundControls';
import { PlaygroundComponent, PlaygroundComponentProp } from './types';
import SourceCodeViewer from './SourceCodeViewer';

type PlaygroundProps = {
    sourceCode: string;
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
    const { demoComponent, sourceCode, config, playgroundDrawerWidth = 375 } = props;
    const [state, dispatch] = useReducer(playgroundReducer, getInitialState(config));

    React.useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('state: ', state);
    }, [state]);

    const getComponentProps = useCallback((): any => {
        const propKeyValuePairs: any = {};

        config?.props?.forEach((prop: PlaygroundComponentProp) => {
            propKeyValuePairs[prop.propName] = prop.inputValue;
        });

        config?.sharedProps?.forEach((prop: PlaygroundComponentProp) => {
            propKeyValuePairs[prop.propName] = prop.inputValue;
        });

        config?.additionalProps?.forEach((prop: PlaygroundComponentProp) => {
            propKeyValuePairs[prop.propName] = prop.inputValue;
        });

        return propKeyValuePairs;
    }, [state]);

    const previewContent = React.createElement(demoComponent, getComponentProps());

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
                <ComponentPreview previewContent={previewContent} sx={{ flex: 7 }} />
                <SourceCodeViewer code={sourceCode} sx={{ flex: 3 }} />
            </Box>
            <PlaygroundControls config={config} playgroundDrawerWidth={playgroundDrawerWidth} dispatch={dispatch} />
        </Box>
    );
};

// export const PreviewComponent = (): JSX.Element => {
//     const channelValueJson = useAppSelector((state: RootState) => state.componentsPropsState.channelValueComponent);

//     const channelValueProps = createProps(channelValueJson.props as PropsType[]);
//     const otherProps = createProps(channelValueJson.otherProps as PropsType[]);

//     const toggleDefaultProp = (propName: string, currentValue: any): string =>
//         hideDefaultPropsFromSnippet(channelValueJson, propName, currentValue, 'props');

//     const toggleIconProp = (icon: string): string => {
//         if (icon === 'undefined') {
//             return toggleDefaultProp('icon', channelValueProps.icon);
//         }
//         return `icon={${getIconWithProp(
//             channelValueProps.icon,
//             otherProps.htmlColor
//                 ? { fontSize: 'inherit', htmlColor: `${otherProps.htmlColor}` }
//                 : { fontSize: 'inherit' }
//         )}}`;
//     };

//     const generateCodeSnippet = (): string => {
//         const jsx = `<ChannelValue
//     ${toggleDefaultProp('color', channelValueProps.color)}
//     ${toggleDefaultProp('fontSize', channelValueProps.fontSize)}
//     ${toggleIconProp(channelValueProps.icon)}
//     ${toggleDefaultProp('prefix', channelValueProps.prefix)}
//     ${toggleDefaultProp('units', channelValueProps.units)}
//     ${toggleDefaultProp('unitSpace', channelValueProps.unitSpace)}
//     value={"${channelValueProps.value}"}
// />`;
//         return removeEmptyLines(jsx);
//     };

//     return (
//         <PreviewComponentWithCode
//             previewContent={
//                 <ChannelValue
//                     color={channelValueProps.color}
//                     fontSize={channelValueProps.fontSize}
//                     icon={getIcon(channelValueProps.icon, { fontSize: 'inherit', htmlColor: otherProps.htmlColor })}
//                     prefix={channelValueProps.prefix}
//                     units={channelValueProps.units}
//                     unitSpace={channelValueProps.unitSpace}
//                     value={channelValueProps.value}
//                 />
//             }
//             code={generateCodeSnippet()}
//         />
//     );
// };
