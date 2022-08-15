
export interface Sport {
  auther: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface Weather {
  weather: string[];
  main: string;
  temp: number;
  wind: number;
}
