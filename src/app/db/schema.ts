import {
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const authSchema = pgSchema("auth");

export const authUsers = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

export const profilesSchema = pgTable("profiles", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  email: varchar("email", { length: 256 }),
});

export const dayoffSchema = pgTable("dayoff", {
  id: uuid("id").default(sql`gen_random_uuid()`),
  profileId: uuid("profiles_id")
    .notNull()
    .references(() => profilesSchema.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertDayoff = typeof dayoffSchema.$inferInsert;
export type SelectDayoff = typeof dayoffSchema.$inferSelect;

export type InsertProfile = typeof profilesSchema.$inferInsert;
export type SelectProfile = typeof profilesSchema.$inferSelect;
