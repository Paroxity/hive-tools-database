import { z } from "zod";
/**
 * Cosmetic Types
 */
export const CosmeticLocalizedString = z
    .object({
    neutral: z.string(),
})
    .catchall(z.string());
export const CosmeticImage = z.object({
    Id: z.string(),
    Tag: z.string(),
    Type: z.string(),
    Url: z.string(),
});
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
//# sourceMappingURL=types.js.map