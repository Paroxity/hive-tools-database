import { z } from "zod";
/**
 * Players Schema
 */
export declare const players: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "players";
    schema: undefined;
    columns: {
        uuid: import("drizzle-orm/pg-core").PgColumn<{
            name: "uuid";
            tableName: "players";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        username: import("drizzle-orm/pg-core").PgColumn<{
            name: "username";
            tableName: "players";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        rank: import("drizzle-orm/pg-core").PgColumn<{
            name: "rank";
            tableName: "players";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        equipped_avatar_id: import("drizzle-orm/pg-core").PgColumn<{
            name: "equipped_avatar_id";
            tableName: "players";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        equipped_avatar_name: import("drizzle-orm/pg-core").PgColumn<{
            name: "equipped_avatar_name";
            tableName: "players";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        created_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "players";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updated_at: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "players";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
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
 * Cosmetics Schema
 */
export declare const cosmetics: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "cosmetics";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "cosmetics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "cosmetics";
            dataType: "json";
            columnType: "PgJson";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        description: import("drizzle-orm/pg-core").PgColumn<{
            name: "description";
            tableName: "cosmetics";
            dataType: "json";
            columnType: "PgJson";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        creation_date: import("drizzle-orm/pg-core").PgColumn<{
            name: "creation_date";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        last_modified: import("drizzle-orm/pg-core").PgColumn<{
            name: "last_modified";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        start_date: import("drizzle-orm/pg-core").PgColumn<{
            name: "start_date";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        end_date: import("drizzle-orm/pg-core").PgColumn<{
            name: "end_date";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        thumbnail: import("drizzle-orm/pg-core").PgColumn<{
            name: "thumbnail";
            tableName: "cosmetics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        images: import("drizzle-orm/pg-core").PgColumn<{
            name: "images";
            tableName: "cosmetics";
            dataType: "json";
            columnType: "PgJson";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        avg_rating: import("drizzle-orm/pg-core").PgColumn<{
            name: "avg_rating";
            tableName: "cosmetics";
            dataType: "number";
            columnType: "PgReal";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ratings: import("drizzle-orm/pg-core").PgColumn<{
            name: "ratings";
            tableName: "cosmetics";
            dataType: "json";
            columnType: "PgJson";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        price: import("drizzle-orm/pg-core").PgColumn<{
            name: "price";
            tableName: "cosmetics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        manual_tags: import("drizzle-orm/pg-core").PgColumn<{
            name: "manual_tags";
            tableName: "cosmetics";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: import("drizzle-orm").Column<{
                name: "manual_tags";
                tableName: "cosmetics";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        row_created: import("drizzle-orm/pg-core").PgColumn<{
            name: "row_created";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        row_updated: import("drizzle-orm/pg-core").PgColumn<{
            name: "row_updated";
            tableName: "cosmetics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
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
