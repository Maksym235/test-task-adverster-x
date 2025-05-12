import { FC } from "react";
import styles from "./FilterItem.module.css";
import { IFilters, IFiltersListItem } from "@/types/Filters";
import Image from "next/image";

export const FilterItem: FC<IFiltersListItem> = ({
  update,
  cleanValue,
  type,
  name,
  value,
}) => {
  const handleChangeValue = function (e: React.ChangeEvent<HTMLInputElement>) {
    update(e.target.value);
  };
  const handleCleanValue = function () {
    cleanValue(name as keyof IFilters, "");
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={`enter ${name}...`}
        onChange={handleChangeValue}
      />
      <button onClick={handleCleanValue} className={styles.clean_btn}>
        <Image src="/cross.svg" alt="clean input" width={24} height={24} />
      </button>
    </div>
  );
};
