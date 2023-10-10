const array=['item1','item2','item3','item4'];
//delete
array.splice(1,3);
console.log(array);

//insert and delete
const arrays=['item1','item2','item3','item4'];
const deleteitem=arrays.splice(0,2,'inserted item1','inserteditem2');
console.log(arrays);
console.log('delete item is',deleteitem )

const number=(nam,nam2)=>nam*nam2;
const output3=number(45,60);
console.log(output3);

// iterables
const firstname=['sinan']
for(let name of firstname){
    console.log(name);
}

//string and array are iterable;obj is not iterable;
// sets(it is iterable)

const numbers2= new Set([1,23]);
numbers2.add(12);


numbers2.add(['item1','item2']);
numbers2.add(['item1','item2']);
if(numbers2.has(12)){
    console.log('12 is present');
}else{
    console.log('12 is not present');
}




console.log(numbers2);


const myArray=[1,2,3,34,4,5,6,7,5,4,32,3,54,6,3,2,1];
const output=new Set(myArray);
let length=0;
for(let element of output){
    length++;
}
console.log(length);
