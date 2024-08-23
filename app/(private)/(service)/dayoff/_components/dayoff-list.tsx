// import { SelectUser } from "@/app/db/schema";
import { getMealExpenses, getUsers } from "../_libs/actions";

export async function DayoffList() {
  const context = await getMealExpenses();

  console.log(context);

  // return <List users={users}></List>;
  return <></>;
}
