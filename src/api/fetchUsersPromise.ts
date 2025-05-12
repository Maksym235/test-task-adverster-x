import { IUser } from "@/types/Users";
import axios from "axios";

export async function fetchUsersPromise(): Promise<IUser[]> {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  if (!(res.status === 200)) throw new Error("Failed to fetch");
  return res.data;
}
