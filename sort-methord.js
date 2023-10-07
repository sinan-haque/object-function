//sort methor
numbers=[13300,1,4,576,8,54,788567,89,5738];
const output=numbers.sort( (a,b)=>a-b);
//a-b holo choto theke boro;b-a holo boro theke choto;


console.log(output);


//realistic example

const products=[
    { productId:1, productName:'computer',price:70000},
    {productId:2, productName:'IPS',price:40000},
    {productId:3, productName:'tv',price:2000},
    {productId:4, productName:'laptop',price:26000},
    {productId:5, productName:'AC',price:83000},
    {productId:6, productName:'pc',price:23000000}
];
const output2=products.slice(0).sort((a,b)=>b.price-a.price);
console.log(output2);
