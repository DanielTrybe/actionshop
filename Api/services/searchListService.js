const { getAll, getFromSeries, getAllFiltered } = require('../models/searchListModel');

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

module.exports = {
  listService,
}