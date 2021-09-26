const { getCategory, getSeries, getManu } = require('../models/categoriesListModel')

const categoryServ = async () => {
  const resultCateg = await getCategory();
  const resultSeries = await getSeries();
  const resultManu = await getManu();
  return { resultCateg, resultSeries, resultManu };
}

module.exports = { categoryServ }