import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
  searchQuery: string;
};

const initialState: FiltersState = {
  selectedCategory: "All Products",
  minPrice: 10,
  maxPrice: 1000,
  sortBy: "Newest First",
  searchQuery: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setMinPrice,
  setSortBy,
  setSearchQuery,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
