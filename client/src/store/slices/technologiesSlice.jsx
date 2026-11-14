import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTechnologies } from "../../services/api";

export const getTechnologiesData = createAsyncThunk(
  "technologies/getTechnologiesData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTechnologies();
      return response.data;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue("Connection Failed.");
      }

      const status = error.response.status;

      if (status === 404) return rejectWithValue("API Endpoint not found.");

      if (status === 500) return rejectWithValue("Internal Server Error.");

      if (status === 400) rejectWithValue("Bad Request Sent.");

      return rejectWithValue(error.response?.data || "Something went wrong.");
    }
  },
);

const technologiesSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTechnologiesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTechnologiesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTechnologiesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default technologiesSlice.reducer;
