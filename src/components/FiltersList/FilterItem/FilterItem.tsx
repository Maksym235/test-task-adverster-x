import { IFiltersListItem } from "@/types/Filters";
import React, { FC } from "react";

export const FilterItem: FC<IFiltersListItem> = ({ update, type, name }) => {
  const handleChangeValue = function (e: React.ChangeEvent<HTMLInputElement>) {
    update(e.target.value);
  };
  return <input type={type} name={name} onChange={handleChangeValue} />;
};
