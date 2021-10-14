const { getAll, getFromSeries, getAllFiltered, getOne } = require('../models/searchListModel');

const listService = async (search) => {
  if (search === '') {
    const resposta = await getAll();
    return resposta;
  }
  
  const resposta = await getAllFiltered(search);

  if (!resposta.length) {
    const resposta = await getFromSeries(search);
    return resposta;
  }
  return resposta;
}

const listOne = async (id) => {
  const resposta = await getOne(id);
  return resposta;
}

module.exports = {
  listService,
  listOne,
}