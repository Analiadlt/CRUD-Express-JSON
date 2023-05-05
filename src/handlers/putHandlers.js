const { updateProduct } = require("../controllers/putController");

const updateProductHandler = async (req, res) => {
  const { id, price, description, image, name } = req.body;

  try {
    const response = await updateProduct(id, name, description, price, image);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateProductHandler };
