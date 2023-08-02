import { createSlice } from '@reduxjs/toolkit';

export type FilterType = {
  filterParam: string;
  sortParam: string;
  activeSort: null | number;
  activeFilter: null | number;
  isSend: boolean;
};

const initialState: FilterType = {
  filterParam: '',
  sortParam: '',
  activeSort: null,
  activeFilter: null,
  isSend: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterParam: (state, action) => {
      state.filterParam = action.payload;
    },
    setSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    setActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setIsSend: (state, action) => {
      state.isSend = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFilterParam,
  setSortParam,
  setActiveSort,
  setActiveFilter,
  setIsSend,
} = filterSlice.actions;

export default filterSlice.reducer;
