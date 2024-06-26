export interface Svg {
  id: number;
  title: string;
  category: string;
  route:
    | string
    | {
        dark: string;
        light: string;
      };
  wordmark:
    | string
    | {
        dark: string;
        light: string;
      };
  url: string;
}

export interface Category {
  category: string | string[];
  total: number;
}
