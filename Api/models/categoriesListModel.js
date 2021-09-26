const connection = require('./connection');

const getCategory = () => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {category: 1, _id: 0}}).toArray());
}

const getSeries = () => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {series: 1, _id: 0}}).toArray());
}

const getManu = () => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {manufacturer: 1, _id: 0}}).toArray());
}

module.exports = { getCategory, getSeries, getManu }