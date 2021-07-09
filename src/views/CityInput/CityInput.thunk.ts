import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { api } from '../../api';

export const getWeather = createAsyncThunk(
  'weather/getWeatherByCity',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await api.getWeather(city);
      return response.data;
    } catch (err) {
      let error: AxiosError = err;
      return rejectWithValue(error.response?.data);
    }
  }
);