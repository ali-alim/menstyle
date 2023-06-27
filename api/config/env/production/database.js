const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {

  return {
    connection: {
      client: "postgres",
      connection: {
        host : parse(env("DATABASE_HOST")),
        port : parse(env("DATABASE_PORT")),
        database: parse(env("DATABASE_NAME")),
        user: parse(env("DATABASE_USERNAME")),
        password: parse(env("DATABASE_PASSWORD"))
      },
      debug: false,
    },
  };
};