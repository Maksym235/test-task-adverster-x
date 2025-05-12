import { IFilters } from "./Filters";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface IUsersList {
  usersPromise: Promise<IUser[]>;
  filters: IFilters;
}

export interface IUserCard {
  user: IUser;
}
