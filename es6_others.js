
var functionTest = (a,b) => {a+b};
var port = 3000
/* console.log(`server started at ${port} `); */

var array1 = [1,2,3];
var array2 = [3,45,3];
var combinedArray = [...array1 , ...array2];


var rollno = 1;
var age = 2;
var objectNew = {rollno,age};
//console.log(objectNew) 

var x= new Set();
x.add(0);
x.add(0);
x.add(1);
x.add(1);
x.add(1);
x.add(1);
x.add("new");
//console.log(x)

function newPromise(){
    return Promise.resolve('success');
}

async function waitForPromise(){
   var message = await newPromise();
}

