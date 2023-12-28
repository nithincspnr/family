const connector = require("@fastify/postgres");
const connection = {
  connectionString: "postgres://postgres:postgres@localhost:5432/family_db",
};

module.exports = {
  connection,
  connector,
};
