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

export type order = {
  id: string;
  user: string;
  products: [] | product[];
  total: number;
};

export type ReducerAction = { type?: string; payload?: [] | product[] };

export type initData = {
  isLoading: boolean;
  isError: boolean;
  products: [] | product[];
  cart: [] | product[];
  orders?: [] | order[];
};

export type state = {
  womenData: initData;
  allProductData: initData;
  admin: initData;
};

export type paramsObj = {
  colour: string[] | [];
  category: string[] | [];
  size: string[] | [];
  brand: string[] | [];
  _sort?: string | null;
  _order?: string | null;
  _page: number;
  _limit: number;
};

export type effectParams = {
  colour: string[] | [];
  category: string[] | [];
  size: string[] | [];
  brand: string[] | [];
  order?: string;
  page?: number;
};

export type axiosObj = {
  params: paramsObj;
};
