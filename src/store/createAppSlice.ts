import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY ?? "";
console.log("API_KEY:", API_KEY);


export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    return await response.json();
  }
);

interface WeatherState {
  weather: any;
  history: Array<{ city: string; temp: number }>;
  status: "idle" | "loading" | "failed"; 
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  history: [],
  status: "idle", 
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading"; 
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "idle"; 
        state.weather = action.payload;
        state.history.push({
          city: action.payload.name,
          temp: action.payload.main.temp,
        });
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed"; 
        state.error = action.error.message ?? "Unknown error";

      });
  },
});

export const { clearHistory } = weatherSlice.actions;

export const weatherSelectors = {
  selectWeather: (state: { weather: WeatherState }) => state.weather.weather,
  selectHistory: (state: { weather: WeatherState }) => state.weather.history,
  selectStatus: (state: { weather: WeatherState }) => state.weather.status, // ✅ Добавил селектор
  selectError: (state: { weather: WeatherState }) => state.weather.error,
};

export default weatherSlice.reducer;
