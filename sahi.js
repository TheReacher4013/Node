function setPromise() {
    return new Promise((resolve, reject) => (
        resolve("i sent you money")
    ))
}

async function callPromise() {
    //    const answer= await setPromise();
    //    console.log(answer);
    //try, catch and finally is a exceptional handling.
    try {
        const answer = await setPromise();
        console.log(answer);

    } catch (error) {
        console.log(error);
    }
}
callPromise();

//kay kay lakshat thevaych ahe
//ES6
//Arrow function:shoretst way to write a function.
//Anonymous function: const addition = (a,b) => (a+b);
//yalach apan callback function sudhha mhanto:
//map method
//when i use arrow function as function parameter to another then it call it as callback function 

// 

//callback function
var arr = [10,20,30];
const mapped = arr.map(ele => ele*2);






// const i= 1;
// const sum = i + b;
// console.log(sum);
// console.log('hello world');

try{
    const  i=1;
    const sum = i+b;
}catch(exe){
    console.log(exe)
}
console.log("hello world");