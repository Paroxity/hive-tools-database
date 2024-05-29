import { z } from "zod";
/**
 * Player Types
 */
export declare const PlayerSchema: z.ZodObject<{
    uuid: z.ZodString;
    username: z.ZodString;
    rank: z.ZodString;
    equipped_avatar_id: z.ZodString;
    equipped_avatar_name: z.ZodString;
    created_at: z.ZodOptional<z.ZodDate>;
    updated_at: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    uuid: string;
    username: string;
    rank: string;
    equipped_avatar_id: string;
    equipped_avatar_name: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}, {
    uuid: string;
    username: string;
    rank: string;
    equipped_avatar_id: string;
    equipped_avatar_name: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}>;
export type PlayerSchema = z.infer<typeof PlayerSchema>;
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
export declare const CosmeticSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodObject<{
        neutral: z.ZodString;
    }, "strip", z.ZodString, z.objectOutputType<{
        neutral: z.ZodString;
    }, z.ZodString, "strip">, z.objectInputType<{
        neutral: z.ZodString;
    }, z.ZodString, "strip">>;
    description: z.ZodObject<{
        neutral: z.ZodString;
    }, "strip", z.ZodString, z.objectOutputType<{
        neutral: z.ZodString;
    }, z.ZodString, "strip">, z.objectInputType<{
        neutral: z.ZodString;
    }, z.ZodString, "strip">>;
    creation_date: z.ZodDate;
    last_modified: z.ZodDate;
    start_date: z.ZodNullable<z.ZodDate>;
    end_date: z.ZodNullable<z.ZodDate>;
    thumbnail: z.ZodString;
    images: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    avg_rating: z.ZodNumber;
    ratings: z.ZodObject<{
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
    price: z.ZodNumber;
    manual_tags: z.ZodArray<z.ZodString, "many">;
    row_created: z.ZodOptional<z.ZodDate>;
    row_updated: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: {
        neutral: string;
    } & {
        [k: string]: string;
    };
    description: {
        neutral: string;
    } & {
        [k: string]: string;
    };
    creation_date: Date;
    last_modified: Date;
    start_date: Date | null;
    end_date: Date | null;
    thumbnail: string;
    images: {
        Id: string;
        Tag: string;
        Type: string;
        Url: string;
    }[];
    avg_rating: number;
    ratings: {
        Average: number;
        TotalCount: number;
        Count5Star: number;
        Count4Star: number;
        Count3Star: number;
        Count2Star: number;
        Count1Star: number;
    };
    price: number;
    manual_tags: string[];
    row_created?: Date | undefined;
    row_updated?: Date | undefined;
}, {
    id: string;
    title: {
        neutral: string;
    } & {
        [k: string]: string;
    };
    description: {
        neutral: string;
    } & {
        [k: string]: string;
    };
    creation_date: Date;
    last_modified: Date;
    start_date: Date | null;
    end_date: Date | null;
    thumbnail: string;
    images: {
        Id: string;
        Tag: string;
        Type: string;
        Url: string;
    }[];
    avg_rating: number;
    ratings: {
        Average?: number | undefined;
        TotalCount?: number | undefined;
        Count5Star?: number | undefined;
        Count4Star?: number | undefined;
        Count3Star?: number | undefined;
        Count2Star?: number | undefined;
        Count1Star?: number | undefined;
    };
    price: number;
    manual_tags: string[];
    row_created?: Date | undefined;
    row_updated?: Date | undefined;
}>;
export type CosmeticSchema = z.infer<typeof CosmeticSchema>;
