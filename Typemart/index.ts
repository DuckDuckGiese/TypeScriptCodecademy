import products from './products'

const productName: string = 'fanny pack';
const shippingAddress: string = '742 Evergreen Terrace, Springfield IL 62629';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.filter(product => product.name === productName)[0];

console.log(product)

if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}

if(Number(product.price) > 25) {
    shipping = 0;
    console.log('free shipping provided for products over $25');
} else {
    shipping = 5;
}

if(shippingAddress.match('New York')) {
    taxPercent = 0.1;
} else {
    taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`)