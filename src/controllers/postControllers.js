const products = require("../utils/data.json");

const fsPromises = require("fs/promises");
const path = require("path");

const dataFilePath = path.join(process.cwd(), "/src/utils/data.json");

const createProduct = async (name, price, description, image) => {
  const lastId = products.at(-1).id;

  const newProduct = {
    id: lastId + 1,
    name: name,
    price: price,
    description: description,
    image: image,
  };

  products.push(newProduct);

  const updateData = JSON.stringify(products);

  await fsPromises.writeFile(dataFilePath, updateData);

  return products;
};

module.exports = { createProduct };
