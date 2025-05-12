"use client";
import { Suspense, useState } from "react";
import styles from "./Home.module.css";
import { FiltersList } from "@/components/FiltersList/FiltersList";
import { UsersList } from "@/components/UsersList/UsersList";
import { fetchUsersPromise } from "@/api/fetchUsersPromise";
import { IFilters } from "@/types/Filters";
const defaultValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  company: "",
};
const usersPromise = fetchUsersPromise();
const HomePage = () => {
  const [filters, setFilters] = useState<IFilters>(defaultValues);

  const isSetAnyFilter = (Object.keys(filters) as (keyof IFilters)[]).some(
    (key) => filters[key]?.length > 0
  );
  const updateOneFilter = function (key: keyof IFilters, value: string) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const cleanAllFilters = function () {
    setFilters(defaultValues);
  };
  return (
    <div className={styles.home_block}>
      <FiltersList
        isSetAnyFilter={isSetAnyFilter}
        cleanAll={cleanAllFilters}
        updateFilter={updateOneFilter}
        initialFilters={filters}
      />
      <Suspense>
        <UsersList usersPromise={usersPromise} filters={filters} />
      </Suspense>
    </div>
  );
};

export default HomePage;
