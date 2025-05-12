import { FC } from "react";
import styles from "./FiltersList.module.css";
import { IFiltersList } from "@/types/Filters";
import { FilterItem } from "./FilterItem/FilterItem";

export const FiltersList: FC<IFiltersList> = ({
  initialFilters,
  updateFilter,
}) => {
  const handleSetFilter = function (key: string, value: string) {
    updateFilter(key, value);
  };
  return (
    <div className={styles.filters_wrapper}>
      {Object.keys(initialFilters).map((key) => (
        <div key={key}>
          <p>{key}</p>
          <FilterItem
            name={key}
            type={key === "id" ? "number" : "text"}
            update={(name) => handleSetFilter(key, name)}
          />
        </div>
      ))}
    </div>
  );
};
