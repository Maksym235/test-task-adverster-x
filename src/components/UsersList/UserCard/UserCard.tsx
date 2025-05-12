import { FC } from "react";
import styles from "./UserCard.module.css";
import { IUserCard } from "@/types/Users";

export const UserCard: FC<IUserCard> = ({ user }) => {
  return (
    <div>
      <h2 className={styles.title}>{user.name}</h2>
      <ul className={styles.list}>
        <div className={styles.text_block}>
          <p className={styles.label}>Username:</p>
          <p className={styles.value}>{user.username}</p>
        </div>
        <div className={styles.text_block}>
          <p className={styles.label}>Email:</p>
          <p className={styles.value}>{user.email}</p>
        </div>
        <div className={styles.text_block}>
          <p className={styles.label}>Phone:</p>
          <p className={styles.value}>{user.phone}</p>
        </div>
        <div className={styles.text_block}>
          <p className={styles.label}>Website:</p>
          <p className={styles.value}>{user.website}</p>
        </div>
        <div className={styles.text_block}>
          <p className={styles.label}>Address:</p>
          <p className={styles.value}>
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
        <div className={styles.text_block}>
          <p className={styles.label}>Company:</p>
          <p className={styles.value}>
            {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
          </p>
        </div>
      </ul>
    </div>
  );
};
