import postgres from "postgres";
/**
 * @param connectionString See {@link https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS Postgres Connection URIs}
 */
export default function initializeDatabase({ connectionUri, }: {
    connectionUri: string;
}): {
    client: postgres.Sql<{}>;
    db: import("drizzle-orm/postgres-js").PostgresJsDatabase<{
        cosmetics: import("drizzle-orm/pg-core").PgTableWithColumns<{
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
        players: import("drizzle-orm/pg-core").PgTableWithColumns<{
            name: "players";
            schema: undefined;
            columns: {
                id: import("drizzle-orm/pg-core").PgColumn<{
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
                equipped_avatar: import("drizzle-orm/pg-core").PgColumn<{
                    name: "equipped_avatar";
                    tableName: "players";
                    dataType: "json";
                    columnType: "PgJson";
                    data: unknown;
                    driverParam: unknown;
                    notNull: false;
                    hasDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                }, {}, {}>;
            };
            dialect: "pg";
        }>;
    }>;
};
export * from "./types";
export * from "./schema";
