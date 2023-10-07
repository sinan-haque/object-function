const numbers=[10,100,3572];

const output=numbers.every(number=>number%2===0);
console.log(output);

//realistic example


const products=[
    { productId:1, productName:'computer',price:70000},
    {productId:2, productName:'IPS',price:40000},
    {productId:3, productName:'tv',price:2000},
    {productId:4, productName:'laptop',price:26000},
    {productId:5, productName:'AC',price:83000},
    {productId:6, productName:'pc',price:230000}
];
const output1=products.every(carditem =>carditem.price<300000);
console.log(output1);
