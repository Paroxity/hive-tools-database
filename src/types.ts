import { z } from "zod";

/**
 * Player Types
 */

export const PlayerAvatar = z.object({
  url: z.string(),
  name: z.string(),
});
export type PlayerAvatar = z.infer<typeof PlayerAvatar>;

/**
 * Cosmetic Types
 */

export const CosmeticImageLocalizedString = z
  .object({
    neutral: z.string(),
  })
  .catchall(z.string());
export type CosmeticImageLocalizedString = z.infer<
  typeof CosmeticImageLocalizedString
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
