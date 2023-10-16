//Map
//map is an iterable
const person9={
    name:'sinan hauqe',
    roll:22101,
    1:'one'
}
console.log(person9.name);
console.log(person9.roll);
console.log( typeof person9);
for(let key in person9){
    console.log(typeof key);
}

// key value pair

const person1=new Map()
person1.set('fname','sinan hauqe');
person1.set( 'age',9);
person1.set( [1,2,3,4,5,6,66],'one');

// console.log(person1);
// console.log( person1.get('fname'))
// console.log( person1.get('age'));
// for( let key of person1.keys()){
//     console.log(key,typeof key)

// }
for([key, value]of person1){
    console.log(key,value)
}


 
const  person2= new Map();
person2.set('name','sinan haque')
person2.set('age',16);
person2.set(10,'ten');
console.log(person2);
console.log(typeof person1);
for(let key of person2){
    console.log(person2.get('name'))
}
console.log(person2.keys())

for(let key2 of person2.keys()){
    console.log(key2);
}


//realistic example

const person0={
    name:'sinan haque',
    roll:121
}
const extraInfo =new Map();
extraInfo.set(person0,{age:100,gender:'male'});
console.log(extraInfo.get(person0).gender);

// clone

const exam_qustion={
    paragraph:'National flag',
    email:'newspaper'
}
// const exam_qustion2={...exam_qustion};
const exam_qustion2=Object.assign({},exam_qustion);

exam_qustion.gmail='natural beaute';

console.log(exam_qustion);
console.log(exam_qustion2);





//optional chaining



// const user={
//     name:'sinan haque',
//     address:{shibpur:1206}
// }

// console.log(user.address.shibpur)


const user={
    name:'sinan haque',
    address:{shibpur:1206}
}
console.log(user?.name);
console.log(user?.name?.shibpur);

// (?)na dile Error asbe ar dile undefined asbe;







