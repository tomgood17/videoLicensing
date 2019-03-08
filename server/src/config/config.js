module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vidlockr',
    user: process.env.DB_USER || 'vidlockr',
    password: process.env.DB_PASS || 'vidlockr',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vidlockr.sqlite',
      operatorsAliases: false
    }
  }
}
