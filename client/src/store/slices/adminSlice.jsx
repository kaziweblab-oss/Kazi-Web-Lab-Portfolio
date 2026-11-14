import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAdmin } from "../../services/api";

export const getAdminData = createAsyncThunk(
  "admin/getAdminData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAdmin();
      return response.data;
    } catch (error) {
      if (!error.response.data) rejectWithValue("Connection Fail.");

      const status = error.response.status;

      if (status === 404) rejectWithValue("API Endpoint not found.");
      if (status === 500) rejectWithValue("Internal Server Error.");
      if (status === 400) rejectWithValue("Bad Request Send.");

      return rejectWithValue(error.response?.data || "Something went wrong.");
    }
  },
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
