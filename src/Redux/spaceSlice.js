import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  success_data: [],
  error: "",
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    USER_FETCH_SUCCEEDED: (state, action) => {
      state.loading = false;
      state.success_data = action.data;
      state.error = "";
    },
    USER_FETCH_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.success_data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { USER_FETCH_SUCCEEDED, USER_FETCH_FAILURE } = spaceSlice.actions;

export default spaceSlice.reducer;
