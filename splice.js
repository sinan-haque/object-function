const array=['item1','item2','item3','item4'];
//delete
array.splice(1,3);
console.log(array);

//insert and delete
const arrays=['item1','item2','item3','item4'];
const deleteitem=arrays.splice(0,2,'inserted item1','inserteditem2');
console.log(arrays);
console.log('delete item is',deleteitem )