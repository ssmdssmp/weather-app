export type TSearchListItem = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export type TSearchState = {
  query: string;
  error: {
    isError: boolean;
    errorMessage: string;
  };
  loading: boolean;
  list: TSearchListItem[];
};

export type TSearchApiResponse = {
  data: TSearchListItem[];
};
export type TSearchApiRequestPayload = {
  searchQuery: string;
};
