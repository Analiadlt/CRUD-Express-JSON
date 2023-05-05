const products = require("../utils/data.json");

// esta función extrae de cualquier array dado, sólo aquellos elementos que se utilizarán en la app.
const infoCleaner = (array) => {
  return array.map((element) => {
    return {
      name: element.name,
      email: element.email,
      description: element.description,
      price: element.price,
      image: element.image,
    };
  });
};

const getAllProducts = async () => {
  return products;
};

const getProductByName = async (name) => {
  const infoApi = products;
  const cleanedProducts = infoCleaner(infoApi);

  const filteredProduct = cleanedProducts.filter(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );

  return filteredProduct;
};

const getById = (id) => {
  return products.filter((product) => product.id === Number(id));
};

module.exports = {
  getAllProducts,
  getProductByName,
  getById,
};
