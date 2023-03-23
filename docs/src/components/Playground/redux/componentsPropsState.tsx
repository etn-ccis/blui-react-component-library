import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// @todo: update this to use a dynamic value
import channelValueConfig from '../exampleConfig';
import { PlaygroundComponent, Payload, PlaygroundComponentProp } from '../types';
import { getComponentState } from '../utilities';

type ComponentState = {
    channelValueComponent: PlaygroundComponent;
};

const initialState: ComponentState = {
    channelValueComponent: channelValueConfig,
};

export const componentPropsStateSlice = createSlice({
    name: 'componentsPropsState',
    initialState: initialState,
    reducers: {
        resetProps: () => initialState,
        updateProp: (state, action: PayloadAction<Payload>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedControl = newArray?.props?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
        },
        updateSharedProp: (state, action: PayloadAction<Payload>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedControl = newArray?.sharedProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
        },
        updateAdditionalProp: (state, action: PayloadAction<Payload>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedControl = newArray?.additionalProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
        },
        updateChildComponentProp: (state, action: PayloadAction<Payload>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedControl = newArray?.childComponent?.childComponentProps?.filter(
                (prop: PlaygroundComponentProp) => prop.propName === action.payload.propName
            );
            if (updatedControl) {
                updatedControl[0].inputValue = action.payload.propValue;
            }
        },
    },
});

export const { resetProps, updateProp, updateSharedProp, updateAdditionalProp, updateChildComponentProp } =
    componentPropsStateSlice.actions;

export default componentPropsStateSlice.reducer;
