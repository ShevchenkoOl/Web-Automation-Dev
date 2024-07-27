# Web-Automation-Dev

The goal of this project is not just to display product information, but to effectively handle API limitations and ensure complete data collection for further analysis.
The project is written in pure __JS__ using __Node.js__. In requests to the server, I used an asynchronous function using the [axios](https://axios-http.com/) library.

## Getting Started

To get started with this project, follow these steps:

1. **Ensure Required Software**:
   - Make sure you have __Node.js__ and __npm__ installed on your system. You can download them from [Node.js official site](https://nodejs.org/).
2. **Clone the Repository**:
   - Clone the repository to your local machine using:
     ```bash
     git clone https://github.com/ShevchenkoOl/Web-Automation-Dev.git
     ```
3. **Install Dependencies**:
   - Navigate to the project directory and install the necessary dependencies with:
     ```bash
     npm install
     ```
4. **Generate Product Data**:
   - Navigate to the `api-products` folder:
     ```bash
     cd api-products
     ```
   - Generate the product data by running:
     ```bash
     node generateProducts.js
     ```
   - Ensure that the terminal displays the message: **File written successfully to:**.
5. **Start the API Server**:
   - Use the following command to start the API server:
     ```bash
     npx apidroid@latest
     ```
6. **Configure API Request**:
   - Navigate back to the root directory of the project:
     ```bash
     cd ..
     ```
   - Open `script.js` and ensure that the API request URL matches the local server. It should look like:
     ```javascript
     const response = await axios.get('http://localhost:4000/api/products');
     ```
7. **Run the Project**:
   - Start the project with:
     ```bash
     npm start
     ```
   - Alternatively, you can run:
     ```bash
     node script.js
     ```
8. **Check the Output**:
   - In the terminal console, you should see messages displaying the maximum and minimum price of the products.

## Author

This repository was created and is maintained by [Oleksii Shevchenko](https://shevchenkool.github.io/portfolio/). For questions, suggestions, or feedback, please reach out via [email](mailto:uzlabini@gmail.com) or connect on [LinkedIn](https://linkedin.com/in/oleksii-shevchenko-535ab61b8). 

If you have any questions or suggestions, feel free to create an [issue](https://github.com/ShevchenkoOl/Web-Automation-Dev/issues) or submit a [pull request](https://github.com/ShevchenkoOl/Web-Automation-Dev/pulls).
