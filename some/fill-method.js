//some-method

const products=[
    { productId:1, productName:'computer',price:70000},
    {productId:2, productName:'IPS',price:40000},
    {productId:3, productName:'tv',price:2000},
    {productId:4, productName:'laptop',price:26000},
    {productId:5, productName:'AC',price:83000},
    {productId:6, productName:'pc',price:230000}
];


const output=products.some(value=>value.price<50000);
console.log(output);

//fill method

const arrray=[2,3,54,5,76,78,8,89];
arrray.fill(0,2,5);
console.log(arrray);

