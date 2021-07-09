import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { getWeather } from '../views/CityInput/CityInput.thunk';

interface WeatherError {
  message: string
}

interface WeatherResponse {
  weather?: [
    {
      id: number,
      main: string,
      description: string,
      icon: string,
    }
  ],
  main?: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number
  },
  name?: string
}

export interface WeatherStateInterface {
  city: string;
  weather: WeatherResponse,
  loading: boolean,
  error?: WeatherError,
}

const initialState: WeatherStateInterface = {
  city: '',
  weather: {},
  loading: false
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = undefined;
        state.weather = {};
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as WeatherError;
      });
  },
});

export const { setCity } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
