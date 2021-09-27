const connection = require('./connection');
// const { ObjectId } = require('mongodb');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('scaleFigures').find().toArray());
};

const getOne = async (id) => {
  const db = await connection();
  const result = await db.collection('scaleFigures').findOne(ObjectId(id));
  return result;
};


const getFromSeries = async (item) => {
  const db = await connection();
  const itemRegex = new RegExp(`.*${item}.*`, 'i');
  const finded = await db.collection('scaleFigures').find({series: itemRegex}).toArray();
  return finded;
}

const getAllFiltered = async (item) => {
  const db = await connection();
  const itemRegex = new RegExp(`.*${item}.*`, 'i');
  const finded = await db.collection('scaleFigures').find({productName: itemRegex }).toArray();
  return finded;
};

module.exports = {
  getAll,
  getFromSeries,
  getAllFiltered,
  getOne,
}
