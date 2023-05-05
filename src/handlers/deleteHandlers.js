const { deleteProduct } = require("../controllers/deleteController");

const deleteProductHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteProduct(id);
    res.status - (200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteProductHandler };
