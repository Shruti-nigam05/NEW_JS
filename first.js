// // 1. display in document:-
// alert("HEY ITS ME, Shruti");
// //document.write("HEY THIS IS DOCUMENT WRITTEN")

// // 2. DISPLAY IN CONSOLE:- 
// console.log("HELLO WORLD!! ");
// console.log("first js code");
// console.warn("this is warning!!! ")
// console.error("this is an ERROR")

// // VARIABLES :- Containers to store datatypes.

var num1 = 2;
var num2 = 5;
console.log(num1 + num2);

//DATATYPES IN JS 

var num1 = 56;
var str1 = "this is shruti";
var marks = {
    shruti : 52,
    parul : 55,
    vidhi : 89
};

console.log(num1);
console.log(str1);
console.log(marks);

let arr = [1,2,3,4,5];

let c = 25;
c = 55;

c -= 5; // c-= ----> c = c-5

function avg(a , b){
    return (a + b)/2
}

let d = avg(14 , 54);
let d2 = avg(4 , 8)
console.log(d);
console.log(d2);


let myDate = new Date();

console.log(myDate);
console.log("time "+myDate.getTime());
console.log("full year "+myDate.getFullYear());
console.log("getday "+myDate.getDay());
console.log("date "+myDate.getDate());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

let myElem = document.getElementById('heading');

console.log(myElem);




