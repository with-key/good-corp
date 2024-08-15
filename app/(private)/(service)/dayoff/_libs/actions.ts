"use server";

import db from "@/app/db";
import { revalidatePath } from "next/cache";

export const createDayoff = async (prevState: any, formData: FormData) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 4000);
  });

  await db.user.create({
    data: {},
  });
};

// export const removeDayoff = async (id: number) => {
//   await db.dayoff.delete({
//     where: {
//       id,
//     },
//   });

//   revalidatePath("/dayoff");
// };

export const getDayoffList = async () => {
  // await new Promise((res) => {
  //   setTimeout(() => {
  //     res(1);
  //   }, 1000);
  // });

  const data = await db.dayoff.findMany({});
  return data;
};
