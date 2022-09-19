

let num = 20;

function showFirstMessage(text){
    console.log(text);
     let num = 201;
     console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);


// function calc(a,b) {
//     return(a+b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

function ret(){
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
  console.log("hello") ; 
};

logger();



// const  calc =(a,b) => {return a = b} ;



// const usdCurr=28;
// const euroCurr=32;

// function convert (amount,curr) {

// console.log(curr * amount);

// }

// convert(500,usdCurr);
// convert(500,euroCurr);

const usdCurr=28;
const discount = 0.9;

function convert (amount,curr) {

    return curr * amount;

}


function promotion(result){

    console.log(result * discount);
}

promotion(convert(500,usdCurr));


function test() {
    for (let i =0; i <5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log("Done");
}

test();


function doNothing(){};
    console.log(doNothing() === undefined);
