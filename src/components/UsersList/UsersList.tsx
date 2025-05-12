import { FC, use } from "react";
import styles from "./UsersList.module.css";
import { IUsersList } from "@/types/Users";
import { UserCard } from "./UserCard/UserCard";
import { useFilteredUsers } from "@/hooks/useFilteredUsers";

export const UsersList: FC<IUsersList> = ({ usersPromise, filters }) => {
  const users = use(usersPromise);
  const filteredUsers = useFilteredUsers(users, filters);
  return (
    <>
      <ul className={styles.list}>
        {filteredUsers.map((user) => (
          <li className={styles.list_item} key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
};
