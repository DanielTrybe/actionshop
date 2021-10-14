const { listService, listOne } = require('../services/searchListService');

const findActions = async (req, res) => {
  const { search } = req.query;
  const result = await listService(search);
  return res.status(200).json({allActions: result});
};

const findOneAction = async (req, res) => {
  const { id } = req.params;
  const result = await listOne(id);
  return res.status(200).json({Action: result});
}

module.exports = { findActions, findOneAction };