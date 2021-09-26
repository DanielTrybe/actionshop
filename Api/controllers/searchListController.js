const { listService } = require('../services/searchListService');

const findActions = async (req, res) => {
  const { search } = req.query;
  const result = await listService(search);
  return res.status(200).json({allActions: result});
};

module.exports = { findActions };