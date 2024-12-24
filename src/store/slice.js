import { createSlice } from "@reduxjs/toolkit";

const kycSlice = createSlice({
  name: "kyc",
  initialState: {
    token: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { addToken } = kycSlice.actions;
export default kycSlice.reducer;
