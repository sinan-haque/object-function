const myArray=['dog','cat','lions','pad',];

const islength=string=>string.length===5;
const ans=islength('lions');
console.log(ans);


const myArray2=['dogs','cats','lions','pad',];
const output0=myArray2.find(string=>string.length===3);
console.log(output0);


//realistic example

const users=[
    {userId:1 ,name:"sinan haque",},
    {userId:2 ,name:" haque",},

    {userId:3 ,name:"samin",},


    {userId:4 ,name:"addin",},
    {userId:5 ,name:"siam",},

    {userId:6 ,name:"faique",}
]
const output1=users.find(user=>user.userId===3)
console.log(output1);
