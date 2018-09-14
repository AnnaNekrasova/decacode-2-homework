const path = require('path');
const fs = require('fs');

const pathToFile = path.resolve('../4-classes/products.csv');
const content = fs.readFileSync(pathToFile, 'utf8');
const pathToJSONnew = path.resolve('../4-classes/result.json');

// console.log(typeof(content));
// console.log(content);

const products = content.split(', ');
// console.log(typeof(products));
// console.log(products);

const Product = function (str) {
	const value = str.split(' ');
	this.price = Number(value[0]);
	this.name = value[1];
	this.USDPrice = (this.price/67.99).toFixed(2)
};
// console.log(typeof(Product));
// console.log(fxprice);

const newproducts = products.map(x => new Product(x));
const newproductsJSON = JSON.stringify(newproducts);

fs.writeFileSync(pathToJSONnew, newproductsJSON, 'utf8');

// console.log(typeof(newproducts));
// console.log(newproducts);
