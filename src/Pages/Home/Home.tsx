"use client";
import { Suspense, useState } from "react";
import styles from "./Home.module.css";
import { IFilters } from "@/types/Filters";
import { FiltersList } from "@/components/FiltersList/FiltersList";
import { UsersList } from "@/components/UsersList/UsersList";
import { fetchUsersPromise } from "@/api/fetchUsersPromise";
const usersPromise = fetchUsersPromise();
export const HomePage = () => {
  const [filters, setFilters] = useState<IFilters>({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    company: "",
  });
  const updateFilters = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className={styles.home_block}>
      <FiltersList updateFilter={updateFilters} initialFilters={filters} />
      <Suspense>
        <UsersList usersPromise={usersPromise} filters={filters} />
      </Suspense>
    </div>
  );
};
