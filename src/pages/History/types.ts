export interface WeatherHistory {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}
