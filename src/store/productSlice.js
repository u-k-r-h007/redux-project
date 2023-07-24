import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status:"idle"
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //     state.data=action.payload
    // },
    //to handle asynchoronous things in redux this is fine what we done and is commented but there  is more east way that is "EXTRA REDUCERS"
  },
    extraReducers: (builder) => {
      builder
      .addCase(getProducts.pending,(state,action)=>{
        state.status="loading"
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status="idle"
      })
      .addCase(getProducts.rejected, (state, action)=>{
        state.status="error"
      })
    },
  
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();
//     dispatch(fetchProducts(result));
//   };
// }
