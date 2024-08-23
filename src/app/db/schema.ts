import {
  integer,
  pgSchema,
  pgTable,
  primaryKey,
  serial,
  timestamp,
  uuid,
  decimal,
  varchar,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

const authSchema = pgSchema("auth");

export const authUsers = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  email: varchar("email", { length: 256 }),
  name: varchar("name", { length: 256 }),
});

// 프로필은 조인테이블을 1:n 관계로 바람
export const profileRelations = relations(profiles, ({ many }) => ({
  mealExpenses: many(profilesToMealExpenses),
}));

export const mealExpenses = pgTable("meal_expenses", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  profileId: uuid("profiles_id")
    .notNull()
    .references(() => profiles.id, { onUpdate: "cascade" }),
});

// 식대사용내역은 조인테이블을 1:n 관계로 바라봄
export const mealExpensesRelations = relations(mealExpenses, ({ many }) => ({
  profiles: many(profilesToMealExpenses),
}));

// 조인 테이블
export const profilesToMealExpenses = pgTable(
  "profiles_to_meal_expenses",
  {
    profileId: uuid("profile_id")
      .notNull()
      .references(() => profiles.id, { onUpdate: "cascade" }),

    mealExpenseId: serial("meal_expenses_id")
      .notNull()
      .references(() => mealExpenses.id, { onUpdate: "cascade" }),

    share: decimal("share"),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.profileId, t.mealExpenseId] }),
  })
);

export const profilesToMealExpensesRelations = relations(
  profilesToMealExpenses,
  ({ one }) => {
    return {
      profile: one(profiles, {
        fields: [profilesToMealExpenses.profileId],
        references: [profiles.id],
      }),

      mealExpense: one(mealExpenses, {
        fields: [profilesToMealExpenses.mealExpenseId],
        references: [mealExpenses.id],
      }),
    };
  }
);

export const dayoffs = pgTable("dayoff", {
  id: uuid("id").default(sql`gen_random_uuid()`),
  profileId: uuid("profiles_id")
    .notNull()
    .references(() => profiles.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertDayoff = typeof dayoffs.$inferInsert;
export type SelectDayoff = typeof dayoffs.$inferSelect;

export type InsertProfile = typeof profiles.$inferInsert;
export type SelectProfile = typeof profiles.$inferSelect;
