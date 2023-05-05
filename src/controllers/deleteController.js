const products = require("../utils/data.json");

const path = require("path");
const fsPromises = require("fs/promises");

const dataFilePath = path.join(process.cwd(), "/src/utils/data.json");

const deleteProduct = async (id) => {
  const found = products.find((product) => product.id === Number(id));
  if (found) {
    const deletion = products.filter((elem) => elem.id !== found.id);

    const updatedData = JSON.stringify(deletion);

    await fsPromises.writeFile(dataFilePath, updatedData);

    return products;
  }
};
