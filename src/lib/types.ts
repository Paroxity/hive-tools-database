import { z } from "zod";

/**
 * Player Types
 */

export const PlayerSchema = z.object({
  uuid: z.string(),
  username: z.string(),
  rank: z.string(),
  equipped_avatar_id: z.string().optional(),
  equipped_avatar_name: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});
export type PlayerSchema = z.infer<typeof PlayerSchema>;

/**
 * Cosmetic Types
 */

export const CosmeticLocalizedString = z
  .object({
    neutral: z.string(),
  })
  .catchall(z.string());
export type CosmeticImageLocalizedString = z.infer<
  typeof CosmeticLocalizedString
>;

export const CosmeticImage = z.object({
  Id: z.string(),
  Tag: z.string(),
  Type: z.string(),
  Url: z.string(),
});
export type CosmeticImage = z.infer<typeof CosmeticImage>;

const CosmeticRatingDefaultNumber = z.number().default(0);

export const CosmeticRating = z.object({
  Average: CosmeticRatingDefaultNumber,
  TotalCount: CosmeticRatingDefaultNumber,
  Count5Star: CosmeticRatingDefaultNumber,
  Count4Star: CosmeticRatingDefaultNumber,
  Count3Star: CosmeticRatingDefaultNumber,
  Count2Star: CosmeticRatingDefaultNumber,
  Count1Star: CosmeticRatingDefaultNumber,
});
export type CosmeticRating = z.infer<typeof CosmeticRating>;

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
