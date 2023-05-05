const products = require("../utils/data.json");

const path = require("path");
const fsPromises = require("fs/promises");

const dataFilePath = path.join(process.cwd(), "/src/utils/data.json");

const updateProduct = async (id, name, description, price, image) => {
  let found = products.find((product) => product.id === Number(id));

  if (!found) return "Product not found";

  const updatedObj = product.map((obj) => {
    if (obj.id === Number(id)) {
      obj.id = obj.id;
      obj.name = name;
      obj.price = price;
      obj.description = description;
      obj.image = image;
    }
    return obj;
  });

  const updatedData = JSON.stringify(updatedObj);

  await fsPromises.writeFile(dataFilePath, updatedData);

  return products;
};

module.exports = { updateProduct };
