import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../../services/api";

export const getProjectsData = createAsyncThunk(
  "projects/getProjectsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProjects();
      return response.data;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue("Connection Failed.");
      }

      const status = error.response.status;

      if (status === 404) return rejectWithValue("API Endpoint not found.");

      if (status === 500) return rejectWithValue("Internal Server Error.");

      if (status === 400) return rejectWithValue("Bad Request");

      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);

const projectSlice = createSlice({
  name: "projects",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProjectsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
