import { FC, useState } from "react";
import styles from "./FiltersList.module.css";
import { FilterItem } from "./FilterItem/FilterItem";
import { IFilters, IFiltersList } from "@/types/Filters";
import { FiltersHeader } from "./FiltersHeader/FiltersHeader";
import { AnimatePresence, motion } from "motion/react";

export const FiltersList: FC<IFiltersList> = ({
  updateFilter,
  initialFilters,
  cleanAll,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetFilter = function (key: string, value: string) {
    updateFilter(key as keyof IFilters, value);
  };
  const isSetAnyFilter = (
    Object.keys(initialFilters) as (keyof IFilters)[]
  ).some((key) => initialFilters[key]?.length > 0);

  const toggleOpen = function () {
    setIsOpen((state) => !state);
  };
  return (
    <div className={styles.container}>
      <FiltersHeader
        toggleOpen={toggleOpen}
        isSetAnyFilter={isSetAnyFilter}
        cleanAll={cleanAll}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <div className={styles.filters_wrapper}>
              {Object.keys(initialFilters).map((key) => (
                <div className={styles.one_filter_block} key={key}>
                  <p className={styles.filter_title}>{key}</p>
                  <FilterItem
                    name={key}
                    value={initialFilters[key as keyof IFilters]}
                    type={key === "id" ? "number" : "text"}
                    update={(name) => handleSetFilter(key, name)}
                    cleanValue={handleSetFilter}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
