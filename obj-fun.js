const person={
    name:'sinan',
    age:22,
    'my gender':['male']

}

console.log(person['age']);
console.log(person['name']);
console.log(typeof(person['my gender']));

console.log(typeof(person))

const key='email'
const person3={
    name:"sinan haque",
    roll:222171,
    section:'F',

}
person3[key]='sinanhaque10@gmail.com';


console.log(person3);

const key1='email';

const person0={
    name:"sinan haque",
    username:"sinan",
    'live in':['Shibpur narsindi']

}
person0[key1]='sinanhaque10@gamil.com';
for(personal in person0){
    console.log(`${personal}: ${person0[personal]}`)
}

const key9='email'
const person8={
    name:'sinan haque',
    roll:222171,
    section:'f'

}
person8[key9]='sinan.haque63@gmail.com';
for(key6 in person8){
    console.log(person8[key6])
}

const key12='name';
const key13='plan';

const value1='sinan haque';

const value2='programmer';
const keys={
    [key12]:value1,
    [key13]:value2
}
console.log(keys);

const number=['1','3','4','6','5'];
const number2=['2','7','9'];
const number3=[...number,...number2];

console.log(number3);

const key2={
    value23:'sinan',
    value24:'haque',
    value25:'addin',
    value26:'sadbin'
}
let newvalue={ value23, ...restProps}=key2;

console.log(value23)
console.log(restProps)


let users=[
    {userid:123,firstName:'sinan hauqe',section:'f'},
   { userid:126,firstName:'korim',section:'A'},

    {userid:127,firstName:'rohim',section:'B'}

]
for(let userr of users){
    console.log( userr.firstName);
}

const students=[
    {name:'sinan',roll:'171',group:'business'},

    {name:'korim',roll:'172',group:'science'},

    {name:'rohim',roll:'173',group:'arts'}



]
const [{name,group},,{roll}]=students;

console.log(name,group);
console.log( name,roll);




//methods


// const multiply=[4,5,7];
// function number1(multiply,index){
//     console.log(index)
//     console.log(multiply*3);
    
// }
// number1(multiply[0],0);


// const numbers=[10,5,21,8];

// numbers.forEach(function(number ,index){
//     console.log(`index is ${index} number is ${number}`)
// }




// const multyply=(number,index)=>{
//     console.log(`number is ${number} index is ${index}`)
// }

numbers=[5,6,7,8]

numbers.forEach(function(number){
    console.log(number*3);
})


const users2=[
    {firstname:'sinan haque',age:18},
    {firstname:'addin haque',age:15},
    {firstname:'sadbin haque',age:22}
];
// users2.forEach(function(user3){
//     console.log(user3.firstname)
// })


// users2.forEach(function(user3){
//     console.log(user3.firstname)
// })

for(user3 of users2){
    console.log(user3.age)
    console.log(user3.firstname)

}
const numbers00=[5,6,7,8]


// for(number34 of numbers00){
//     console.log(number34*5)
// };

numbers00.forEach(function(number){
    console.log(number*10)

})

console.log('hello world');

console.log('sinan haque');



