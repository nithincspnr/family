import pg from "pg";

const pgClient = new pg.Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "family_db",
});

pgClient.once("connect", () => {
  console.log("connected to database");
});

pgClient.on("error", (err) => {
  console.error("connection error", err.stack);
});

export default pgClient;
