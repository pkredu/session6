var x = 10;

function check(){
    if(true){
        let y = 10;
        console.log('y scoped in function if-block',y);
    }
    //console.log('y scoped out of function if-block',y);
    var x =100;
    console.log('x scoped in function',x);
}
//console.log('x scoped in file',x);
//check()

const int1 = 12;
//int1 = 13;

const array1 = [1,2,3];
array1[2] = 5;
console.log(array1);

