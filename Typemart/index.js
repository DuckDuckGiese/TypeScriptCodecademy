"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'beanie';
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
console.log(product);
