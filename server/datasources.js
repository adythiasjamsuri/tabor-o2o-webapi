module.exports = {
  sqlserver: {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "user": process.env.DB_USER
  }
};
