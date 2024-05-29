import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { cosmetics, players } from "./schema";

/**
 * @param connectionString See {@link https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS Postgres Connection URIs}
 */
export default function initializeDatabase({
  connectionUri,
}: {
  connectionUri: string;
}) {
  const client = postgres(connectionUri, { prepare: false });
  const db = drizzle(client, { schema: { cosmetics, players } });

  return { client, db };
}
