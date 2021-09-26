const { categoryServ } = require('../services/categoriesListService');

const categList = async (_req, res) => {
  const result = await categoryServ();
  const finalResult = { manufacturers: result.resultManu, series: result.resultSeries, category: result.resultCateg }
  return res.status(200).json({ categoriesList: finalResult });
};

module.exports = { categList }