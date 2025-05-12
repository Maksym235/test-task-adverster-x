export interface IFilters {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  company: string;
}

export interface IFiltersList {
  updateFilter: (key: string, value: string) => void;
  initialFilters: IFilters;
}

export interface IFiltersListItem {
  update: (value: string) => void;
  name: string;
  type: string;
}
