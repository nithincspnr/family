const fastify = require("fastify")();

fastify.register(require("@fastify/postgres"), {
  connectionString: "postgres://postgres@localhost/postgres",
});
// Declare a route
fastify.get("/", function (request, reply) {
  //   reply.send({ hello: "world" });
  fastify.pg.query("SELECT * FROM profiles", function onResult(err, result) {
    reply.send(err || result);
  });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
