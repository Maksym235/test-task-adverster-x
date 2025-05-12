import { IUser } from "@/types/Users";
import { IFilters } from "@/types/Filters";

export const useFilteredUsers = (users: IUser[], filters: IFilters) => {
  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase()) &&
      user.website.toLowerCase().includes(filters.website.toLowerCase()) &&
      `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
        .toLowerCase()
        .includes(filters.address.toLowerCase()) &&
      `${user.company.name} ${user.company.catchPhrase} ${user.company.bs}`
        .toLowerCase()
        .includes(filters.company.toLowerCase())
    );
  });
};
