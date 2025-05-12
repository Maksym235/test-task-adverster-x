import { FC } from "react";
import styles from "./UserCard.module.css";
import { IUserCard } from "@/types/Users";

export const UserCard: FC<IUserCard> = ({ user }) => {
  return (
    <div>
      <h2 className={styles.title}>{user.name}</h2>
      <p className={styles.text}>{user.username}</p>
      <p className={styles.text}>{user.email}</p>
      <p className={styles.text}>{user.phone}</p>
      <p className={styles.text}>{user.website}</p>
      <div>
        <p className={styles.text}>address:</p>
        <p className={styles.text}>
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
      <div>
        <p className={styles.text}>company:</p>
        <p className={styles.text}>
          {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
        </p>
      </div>
    </div>
  );
};
