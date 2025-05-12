import React, { FC } from "react";
import styles from "./FiltersHeader.module.css";
import Image from "next/image";
import { IFiltersHeader } from "@/types/Filters";
export const FiltersHeader: FC<IFiltersHeader> = ({
  isSetAnyFilter,
  toggleOpen,
  cleanAll,
}) => {
  return (
    <div className={styles.filters_header}>
      <div onClick={toggleOpen} className={styles.open_btn_wrapper}>
        <button
          className={
            isSetAnyFilter
              ? `${styles.filter_btn} ${styles.with_point}`
              : styles.filter_btn
          }
        >
          <Image src="/filter.svg" alt="filter" width={24} height={24} />
        </button>
        <p className={styles.header_text}>Filters</p>
      </div>
      <button
        onClick={cleanAll}
        className={
          isSetAnyFilter
            ? styles.clean_all_btn
            : `${styles.clean_all_btn} ${styles.hidden_btn}`
        }
      >
        Clean all
      </button>
    </div>
  );
};
