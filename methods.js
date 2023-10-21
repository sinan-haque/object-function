//methods
// const person={
//     name:' haque',
//     roll:22171,
//     about:function(){
//         console.log(this)
// }
// }
// person.about();
function information(){
    console.log(`person name is ${this.name} and his village name is ${this.village}`)

}

const person1={
    name:'sadim mugol',
    village:'charabari',
    about:information
}
const person2={
    name:'salman khan',
    village:'vagabo',
    about:information
}
const person3={
    name:'soriful islam',
    village:'gotterGao',
    about:information
}
person1.about();
person2.about();
person3.about();

const person45={
    name:'sinan haque',
    roll:'222171',
    about:function(){
        console.log(`${this.name},${this.roll}`)
    }
}
person45.about();


 function func(){console.log(`my name is ${this.name} and I am reading in ${this.group} and my roll number ${this.roll}`)};



const person9={
    name:'sinan haque',
    roll:2323,
    group:'business stuides',
    about:func
}
const person8={
    name:'sinan haque',
    roll:2323,
    group:'business stuides',
    about:func
}
const person7={
    name:'sinan haque',
    roll:2323,
    group:'business stuides',
    about:func
}
person9.about()
//call add korle value add korte hobe;




//most replayed

//there things most important ,this are call bind apply

const user ={
    name:'sinan haque',
    section:'F',
    about: function(){
        console.log(this.name , this.section)
    }
}
const user2 ={
    name:'mr. haque',
    section:'e',
}

user.about.call(user2);


//example

function about(hobby){
    console.log(`my name is ${this.name},I live in ${this.live},I am reading in class ${this.class} ,I like `, hobby )
}


const user3={
    name:'samin alom',
    live:'shibpur',
    class:12
}
const user4={
    name:'thammed alom',
    live:'dhaka',
    class:12
}
const user5={
    name:'fahad alom',
    live:'USA',
    class:12
}
about.call(user3,'cricket');
about.apply(user5,['football']);

const func2= about.bind(user4,'cabadi')
func2()
//call vs apply vs bind ;;;;call=apply



//dont do this mistake



    function about(hobby){
    console.log(`my name is ${this.name},I live in ${this.live},I am reading in class ${this.class} ,I like `, hobby )
}

const user6={
    name:'samin alom',
    live:'shibpur',
    class:12,

}
const output3=about.bind(user6,"fball");
output3()



const user7={
    name:'samin alom',
    live:'shibpur',
    class:12,
    about:about=(hobby)=>
    console.log(`my name is ${this.name},I live in ${this.live},I am reading in class ${this.class} ,I like `, hobby )


}
about.call(user7,'c ball');