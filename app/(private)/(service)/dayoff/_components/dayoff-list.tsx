// import { SelectUser } from "@/app/db/schema";
import { getUsers } from "../_libs/actions";

type ListProps = {
  // users: SelectUser[];
};
const List = ({ users }: ListProps) => {
  return <div></div>;
};

export async function DayoffList() {
  const users = await getUsers();

  return <List users={users}></List>;
}
