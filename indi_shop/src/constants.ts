export type product = {
  brand: string;
  category: string;
  colour: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  size: string;
};

export type ReducerAction = { type?: string; payload?: [] | product[] };

export type initData = {
  isLoading: boolean;
  isError: boolean;
  products: [] | product[];
};

export type state = {
  womenData: initData;
};
