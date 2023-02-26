export type product = {
  brand: string;
  category: string;
  colour: string;
  description: string;
  id: number;
  gender: string;
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
  cart: [] | product[];
};

export type state = {
  womenData: initData;
  allProductData: initData;
};

export type paramsObj = {
  colour: string[] | [];
  category: string[] | [];
  size: string[] | [];
  brand: string[] | [];
  _sort?: string | null;
  _order?: string | null;
};

export type effectParams = {
  colour: string[] | [];
  category: string[] | [];
  size: string[] | [];
  brand: string[] | [];
  order?: string;
};

export type axiosObj = {
  params: paramsObj;
};
