import {
  integer,
  json,
  pgTable,
  real,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  CosmeticImage,
  CosmeticLocalizedString,
  CosmeticRating,
  PlayerAvatar,
} from "./types";
import { sql } from "drizzle-orm";
import { z } from "zod";

/**
 * Players Schema
 */

export const players = pgTable("players", {
  id: text("id").primaryKey().notNull(),
  username: text("username").notNull(),
  rank: text("rank").notNull(),
  equipped_avatar: json("equipped_avatar"),
});

export const PlayerSchema = z.object({
  id: z.string(),
  username: z.string(),
  rank: z.string(),
  equipped_avatar: PlayerAvatar,
});
export type PlayerSchema = z.infer<typeof PlayerSchema>;

/**
 * Cosmetics Schema
 */

export const cosmetics = pgTable("cosmetics", {
  id: text("id").primaryKey().notNull(),
  title: json("title").notNull(),
  description: json("description").notNull(),
  creation_date: timestamp("creation_date").notNull(),
  last_modified: timestamp("last_modified").notNull(),
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date"),
  thumbnail: text("thumbnail").notNull(),
  images: json("images").notNull(),
  avg_rating: real("avg_rating").notNull(),
  ratings: json("ratings").notNull(),
  price: integer("price").notNull(),
  manual_tags: text("manual_tags")
    .array()
    .default(sql`ARRAY[]::text[]`),
  row_created: timestamp("row_created").defaultNow(),
  row_updated: timestamp("row_updated").defaultNow(),
});

export const CosmeticSchema = z.object({
  id: z.string(),
  title: CosmeticLocalizedString,
  description: CosmeticLocalizedString,
  creation_date: z.date(),
  last_modified: z.date(),
  start_date: z.date().nullable(),
  end_date: z.date().nullable(),
  thumbnail: z.string(),
  images: z.array(CosmeticImage),
  avg_rating: z.number(),
  ratings: CosmeticRating,
  price: z.number(),
  manual_tags: z.array(z.string()),
  row_created: z.date().optional(),
  row_updated: z.date().optional(),
});
export type CosmeticSchema = z.infer<typeof CosmeticSchema>;
