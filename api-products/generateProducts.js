import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the path to the current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function for generating random data
const generateRandomProduct = (id) => {
  return {
    id: id,
    name: `Product ${id}`,
    price: Math.floor(Math.random() * 100000) + 1
  };
};

// Function to generate array of products
const generateProducts = (totalProducts) => {
  const products = [];
  for (let i = 1; i <= totalProducts; i++) {
    products.push(generateRandomProduct(i));
  }
  return {
    total: totalProducts,
    count: totalProducts,
    products: products
  };
};

// Generate data
const totalProducts = 1500;
const productsData = [generateProducts(totalProducts)];

// Path to the api folder
const apiDir = path.join(__dirname, 'api');
const filePath = path.join(apiDir, 'products.json');

if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Write to file in JSON format
fs.writeFile(filePath, JSON.stringify(productsData, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully to:', filePath);
  }
});
