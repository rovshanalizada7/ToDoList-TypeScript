import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "../../types/types";


const filterSlice = createSlice({
  name: "filter",
  initialState: "all" as Filter,
  reducers: {
    set:(state, action: PayloadAction<Filter>) => action.payload,
  },
})

export const {set} = filterSlice.actions;
export default filterSlice.reducer;




















