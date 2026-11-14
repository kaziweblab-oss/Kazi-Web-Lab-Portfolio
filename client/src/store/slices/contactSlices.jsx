import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../../services/api";

export const getContactsData = createAsyncThunk(
  "contacts/getContactsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue("Connection Failed.");
      }

      const status = error.response.status;

      if (status === 404)
        return rejectWithValue("!!!404 Api end point not found.");

      if (status === 500) return rejectWithValue("Internal Server Error.");

      if (status === 403)
        return rejectWithValue("You don't have enough permission.");

      if (status === 400) return rejectWithValue("400 error.");

      return rejectWithValue(error.response?.data || "Somethings went wrong!");
    }
  },
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContactsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContactsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getContactsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
