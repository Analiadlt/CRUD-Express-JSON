const { createProduct } = require("../controllers/postControllers");
const createProductHandler = async (req, res) => {
  const { name, price, description, image } = req.body;

  try {
    const response = await createProduct(name, price, description, image);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProductHandler };
