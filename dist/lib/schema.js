import { integer, json, pgTable, real, text, timestamp, } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
export const players = pgTable("players", {
    uuid: text("uuid").primaryKey().notNull(),
    username: text("username").notNull(),
    rank: text("rank").notNull(),
    equipped_avatar_id: text("equipped_avatar_id").default("default"),
    equipped_avatar_name: text("equipped_avatar_name").default("Default"),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
});
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
//# sourceMappingURL=schema.js.map