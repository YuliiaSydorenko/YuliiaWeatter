export interface WeatherHistory {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}
