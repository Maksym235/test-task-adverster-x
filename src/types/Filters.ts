export interface IFilters {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  company: string;
}

export interface IFiltersList {
  updateFilter: (key: keyof IFilters, value: string) => void;
  initialFilters: IFilters;
  isSetAnyFilter: boolean;
  cleanAll: () => void;
}

export interface IFiltersHeader {
  isSetAnyFilter: boolean;
  cleanAll: () => void;
  toggleOpen: () => void;
}

export interface IFiltersListItem {
  update: (value: string) => void;
  cleanValue: (key: keyof IFilters, value: string) => void;
  name: string;
  type: string;
  value: string;
}
