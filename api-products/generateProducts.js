import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем путь к текущему файлу и директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для генерации случайных данных
const generateRandomProduct = (id) => {
  return {
    id: id,
    name: `Product ${id}`,
    price: Math.floor(Math.random() * 100000) + 1
  };
};

// Функция для генерации массива продуктов
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

// Генерируем данные
const totalProducts = 1500;
const productsData = [generateProducts(totalProducts)];

// Путь к папке api
const apiDir = path.join(__dirname, 'api');
const filePath = path.join(apiDir, 'products.json');

// Убедитесь, что папка существует, иначе создайте ее
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Записываем в файл в формате JSON
fs.writeFile(filePath, JSON.stringify(productsData, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully to:', filePath);
  }
});
