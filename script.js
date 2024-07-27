import axios from 'axios';

const fetchProducts = async () => {
  let products = [];
  let minPrice = 0;      // Initial minimum price
  let maxPrice = 100000; // Initial maximum price
  let totalProducts = 0;

  while (true) {
    try {
      const response = await axios.get('http://localhost:4000/api/products', {
      // const response = await axios.get('https://api.ecommerce.com/products'), { - this is the original URL that was in the task
        params: {
          minPrice: minPrice,
          maxPrice: maxPrice
        }
      });

      const data = response.data;
      // console.log('Response Data:', data); //checking the correct answer

      const dataArray = data?.data;
      if (dataArray?.length > 0) {
        const productBatch = dataArray[0]?.products || [];
        products = products.concat(productBatch);

        totalProducts = dataArray[0]?.total || totalProducts; // Update totalProducts based on the current batch

        if (products.length >= totalProducts) { // Stop fetching if we've got all products
          break;
        }

        // If more products are available, adjust price range
        minPrice = maxPrice + 1;
        maxPrice = maxPrice + 100000; // Adjust the range as needed
      } else {
        break;
      }
    } catch (err) {
      console.error('Error fetching products:', err.message); //error handling, in this case it will work because according to the assignment condition the URL does not exist
      break;
    }
  }

  // Find the min and max priced products
  if (products.length > 0) {
    const minProduct = products.reduce((min, product) => 
      product.price < min.price ? product : min, 
      products[0]
    );
    const maxProduct = products.reduce((max, product) => 
      product.price > max.price ? product : max, 
      products[0]
    );

    console.log('Most Expensive Product:', maxProduct);
    console.log('Cheapest Product:', minProduct);
  } else {
    console.log('No products found.');
  }
};

fetchProducts();
