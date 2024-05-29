import { integer, json, pgTable, real, text, timestamp, } from "drizzle-orm/pg-core";
import { CosmeticImage, CosmeticLocalizedString, CosmeticRating, } from "./types";
import { sql } from "drizzle-orm";
import { z } from "zod";
/**
 * Players Schema
 */
export const players = pgTable("players", {
    uuid: text("uuid").primaryKey().notNull(),
    username: text("username").notNull(),
    rank: text("rank").notNull(),
    equipped_avatar_id: text("equipped_avatar_id").default("default"),
    equipped_avatar_name: text("equipped_avatar_name").default("Default"),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
});
export const PlayerSchema = z.object({
    uuid: z.string(),
    username: z.string(),
    rank: z.string(),
    equipped_avatar_id: z.string(),
    equipped_avatar_name: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
});
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
        .default(sql `ARRAY[]::text[]`),
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
//# sourceMappingURL=schema.js.map