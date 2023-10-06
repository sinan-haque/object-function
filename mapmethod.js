// map method
const numbers=[23,45,6,7];
const math= function(number){
    return(number+number*2);
}
const output= numbers.map(math);
console.log(output);
//shortcut
const numbers2=[23,45,67];
const output2=numbers2.map((number2,index)=>`index is ${index} and ${number2*number2}`);
console.log(output2);


//realistic example

const users2=[
    {firstname:'sinan haque',age:18},
    {firstname:'addin haque',age:15},
    {firstname:'sadbin haque',age:22}
]

const output3=users2.map(user=>user.firstname);
console.log(output3);

//close
const users4=[
    {firstname:'sinan haque',age:18},
    {firstname:'addin haque',age:15},
    {firstname:'sadbin haque',age:22}
]

const output4=users4.map(user5=>user5.firstname);
console.log(output3);