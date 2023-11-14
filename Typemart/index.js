"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
var shippingAddress = '742 Evergreen Terrace, Springfield IL 62629';
var shipping;
var taxPercent;
var taxTotal;
var total;
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
console.log(product);
if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log('free shipping provided for products over $25');
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
