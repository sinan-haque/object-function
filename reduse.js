//reduce method


const numbers=[2,3,7,8,9,10];
const output =numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(output);

const userCard=[
    { productId:1, productName:'computer',price:70000},
    {productId:2, productName:'IPS',price:40000},
    {productId:3, productName:'tv',price:23000}
]
const totalAmount=userCard.reduce(function(totalprice,currentvalue2){
    return totalprice + currentvalue2.price;
},0)
console.log(totalAmount);