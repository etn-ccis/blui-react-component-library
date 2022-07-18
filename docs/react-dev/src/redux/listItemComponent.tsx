import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import listItemTagJson, { componentType, listItemTagPropItem } from '../componentJson/ListItemTagJson';

interface ListItemTagState {
  listItemTagComponent: componentType[]
}

const initialState: ListItemTagState = { 
  listItemTagComponent: listItemTagJson,
};

export const listItemTagSlice = createSlice({
  name: 'listItemTagComponent',
  initialState,
  reducers: {
    updateListTagComponent: (state, action: PayloadAction<Array<listItemTagPropItem>>) => {
      const newArray = state.listItemTagComponent;
      newArray[0].children = action.payload;
      state.listItemTagComponent = { ...state.listItemTagComponent, ...newArray };
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateListTagComponent } = listItemTagSlice.actions

export default listItemTagSlice.reducer