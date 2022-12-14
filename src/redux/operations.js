import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63933120ab513e12c5067cdf.mockapi.io';

export const fetchData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts/contacts', params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/contacts/${id}`);
        console.log(data);
        return data;
        
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
