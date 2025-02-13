export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export interface WeatherState {
  weather: WeatherData | null;
  history: WeatherData[]; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

