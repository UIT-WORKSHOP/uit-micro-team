module.exports = {
  "mongo": {
    "host": process.env.MDB_HOST || "127.0.0.1",
    "port": process.env.MDB_PORT || 27017,
    "database": process.env.MDB_DATABASE || "uit-micro-team",
    "password": process.env.MDB_PASSWORD || "123",
    "name": "mongo",
    "user": process.env.MDB_USER || "tan",
    "connector": "mongodb"
  }
}
