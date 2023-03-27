module.exports = {
  dbCredentials: {
    port: 3001,
    db: {
      client: "pg",
      connection: {
        host: "127.0.0.1",
        user: "user",
        password: "pass",
        database: "travel-factory-server",
      },
    },
  },
};
