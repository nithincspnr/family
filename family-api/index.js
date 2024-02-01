const fastify = require("fastify")();
const { connector, connection } = require("./db");

// database
fastify.register(connector, connection);
//   .errorHandler((error) => console.log(error));

// CORS
fastify.register(require("@fastify/cors"), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true,
    };
    // do not include CORS headers for requests from localhost
    // if (/^localhost$/m.test(req.headers.origin)) {
    //   corsOptions.origin = false;
    // }
    // callback expects two parameters: error and options
    callback(null, corsOptions);
  };
});

// APIs
fastify.register(require("./api"));

// Starts sever
fastify.listen({ port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

module.exports = function (fastify, ops, next) {
  next();
};
