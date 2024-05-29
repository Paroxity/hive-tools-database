import { z } from "zod";
/**
 * Cosmetic Types
 */
export declare const CosmeticLocalizedString: z.ZodObject<{
    neutral: z.ZodString;
}, "strip", z.ZodString, z.objectOutputType<{
    neutral: z.ZodString;
}, z.ZodString, "strip">, z.objectInputType<{
    neutral: z.ZodString;
}, z.ZodString, "strip">>;
export type CosmeticImageLocalizedString = z.infer<typeof CosmeticLocalizedString>;
export declare const CosmeticImage: z.ZodObject<{
    Id: z.ZodString;
    Tag: z.ZodString;
    Type: z.ZodString;
    Url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Id: string;
    Tag: string;
    Type: string;
    Url: string;
}, {
    Id: string;
    Tag: string;
    Type: string;
    Url: string;
}>;
export type CosmeticImage = z.infer<typeof CosmeticImage>;
export declare const CosmeticRating: z.ZodObject<{
    Average: z.ZodDefault<z.ZodNumber>;
    TotalCount: z.ZodDefault<z.ZodNumber>;
    Count5Star: z.ZodDefault<z.ZodNumber>;
    Count4Star: z.ZodDefault<z.ZodNumber>;
    Count3Star: z.ZodDefault<z.ZodNumber>;
    Count2Star: z.ZodDefault<z.ZodNumber>;
    Count1Star: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    Average: number;
    TotalCount: number;
    Count5Star: number;
    Count4Star: number;
    Count3Star: number;
    Count2Star: number;
    Count1Star: number;
}, {
    Average?: number | undefined;
    TotalCount?: number | undefined;
    Count5Star?: number | undefined;
    Count4Star?: number | undefined;
    Count3Star?: number | undefined;
    Count2Star?: number | undefined;
    Count1Star?: number | undefined;
}>;
export type CosmeticRating = z.infer<typeof CosmeticRating>;
