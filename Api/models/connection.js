// models/connection.js
const { MongoClient } = require('mongodb');
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const MONGO_DB_URL = 'mongodb://localhost:27017';
let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('action_figure');
    return db;
    })
};

module.exports = connection;