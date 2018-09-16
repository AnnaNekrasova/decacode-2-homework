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
	this.price = {"rur":Number(value[0]),"usd":Number(Number((value[0])/68.04).toFixed(2))};
	this.title = value[1];
};

// console.log(typeof(Product));

const newproducts = products.map(x => new Product(x));


const newproductsJSON = JSON.stringify(newproducts);


fs.writeFileSync(pathToJSONnew, newproductsJSON, 'utf8');

// console.log(typeof(newproducts));
// console.log(newproducts);
// function Vehicle(make, model, color) {
//         this.make = make,
//         this.model = model,
//         this.color = color,
//         this.getName = function () {
//             return this.make + " " + this.model;
//         }
// }