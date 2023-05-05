const {
  getAllProducts,
  getProductByName,
  getById,
} = require("../controllers/getControllers");

const getProducts = async (req, res) => {
  const { name } = req.query;

  try {
    const response = name
      ? await getProductByName(name)
      : await getAllProducts();

    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getById(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getProducts,
  getDetail,
};
