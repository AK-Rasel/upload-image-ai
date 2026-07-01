import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

export type Product = {
  _id?: string;
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  featured: boolean;
  image: string;
  rating: number;
  reviews: number;
  createdAt: string;
};

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("/api/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products as Product[];
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
