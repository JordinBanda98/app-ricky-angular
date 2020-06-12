export interface Locations {
  info: Info;
  results: Results[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Results {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
