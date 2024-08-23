"use server";

import { db } from "@/app/db";
import {
  dayoffs,
  mealExpenses,
  profiles,
  profilesToMealExpenses,
} from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createDayoff = async (prevState: any, formData: FormData) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 4000);
  });

  // await db.user.create({
  //   data: {},
  // });
};

export const createUser = async () => {
  return [];
};

// export const removeDayoff = async (id: number) => {
//   await db.dayoff.delete({
//     where: {
//       id,
//     },
//   });

//   revalidatePath("/dayoff");
// };

export const getUsers = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });

  return [];
};

export const getMealExpenses = async () => {
  const mealExpensesList = await db.select().from(mealExpenses).execute();

  console.log(mealExpensesList);

  // 2. 각 식사 내역에 대해 참여자 목록을 추가
  // const result = await Promise.all(
  //   mealExpensesList.map(async (meal) => {
  //     const participants = await db
  //       .select()
  //       .from(profilesToMealExpenses)
  //       .innerJoin(profiles, eq(profilesToMealExpenses.profileId, profiles.id))
  //       .where(eq(profilesToMealExpenses.mealExpenseId, meal.id))
  //       .execute();

  //     return { ...meal, participants };
  //   })
  // );

  return [];
};
