export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
  error?: string;
}
