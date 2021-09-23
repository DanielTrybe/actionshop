const connection = require('./models/connection.js');
const express = require('express');
const app = express();
const port = 3000;
// const cors = require('cors');
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const getCategory = () => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {category: 1, _id: 0}}).toArray());
}

const getSeries = () => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {series: 1, _id: 0}}).toArray());
}

const getManu = (categSearch) => {
  return connection()
  .then((db) => db.collection('scaleFigures').find({}, {projection: {manufacturer: 1, _id: 0}}).toArray());
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('scaleFigures').find().toArray());
};

const getAllFiltered = async (item) => {
  const db = await connection();
  const itemRegex = new RegExp(`.*${item}.*`, 'i');
  const finded = await db.collection('scaleFigures').find({productName: itemRegex }).toArray();
  return finded;
};

const getFromSeries = async (item) => {
  const db = await connection();
  const itemRegex = new RegExp(`.*${item}.*`, 'i');
  const finded = await db.collection('scaleFigures').find({series: itemRegex}).toArray();
  return finded;
}

app.get('/actions', async (req, res) => {
  const { search } = req.query;
  if (search === '') {
    const resposta = await getAll();
    return res.status(200).json({allActions: resposta});
  }
  const resposta = await getAllFiltered(search);
  if (!resposta.length) {
    const serieFilter = await getFromSeries(search);
    return res.status(200).json({allActions: serieFilter});
  }
  return res.status(200).json({allActions: resposta});
});

app.get('/manufacturers', async (_req, res) => {
  const resposta = await getManu();
  return res.status(200).json({manufacturers: resposta});
})

app.get('/series', async (_req, res) => {
  const resposta = await getSeries();
  return res.status(200).json({series: resposta});
})

app.get('/category', async (_req, res) => {
  const resposta = await getCategory();
  return res.status(200).json({category: resposta});
})

app.listen(port, () => console.log("Escutando na porta 3k"));
