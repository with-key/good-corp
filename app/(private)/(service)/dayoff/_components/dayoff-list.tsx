import { getDayoffList } from "../_libs/actions";

export async function DayoffList() {
  const dayoffList = await getDayoffList();

  return (
    <>
      {dayoffList.map((item) => (
        <div key={item.id}>{item.startdDate.toLocaleString()}</div>
      ))}
    </>
  );
}
