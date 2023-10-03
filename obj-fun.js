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
    console.log(key,':',person8[key6])
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