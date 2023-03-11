import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
    headers: {
        'X-RapidAPI-Key': '1833f55ab9msh0b36718e737bc8ap1abec3jsnd7af615b0acd',
        'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
    }
};
const fetchData = createAsyncThunk('Crona Data/fetchData', () => {
    return axios.request(options).then((response) => response.data)
});

const dataSlice = createSlice({
    name: 'Crona Data',
    initialState: { isLoading: false, data: [], error: '' },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.data = [];
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export { fetchData };
export default dataSlice.reducer;