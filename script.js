// console.log("Hello World");


// var a = 10;
// console.log(a);
// var a = "Name"
// console.log(a);

// let name = "john";
// console.log(name);

// const pi = 3.14;
// console.log(pi);
// // const pi =3.14



// // nan

// let valueone = 2;
// let valuetwo = "a";

// console.log(valueone+valuetwo);

// console.log(valueone+parseInt(valuetwo));



// // const name = "john";
// const age = 30;
// const rating = 4.5; 
// const isCool = true;
// const x = null;
// var y;

// console.log(typeof name);


// console.log("My name is " + name + " and i am " +age);
// //console.log('My name is ${name} and  i am ${age}');


// //Array


// //push
// arrayOne = ["john",30,true,null,undefined]
// console.log(arrayOne);

// arrayOne.push("Apple");
// console.log(arrayOne);


// //pop
// arrayOne.pop();
// console.log(arrayOne);

// //unshift
// arrayOne.unshift("Mango");
// console.log(arrayOne);

// console.log(arrayOne[1]);

// arrayOne[3]="banana";
// console.log(arrayOne);

// console.log(arrayOne.length);

// arrayOne.splice(3,2);
// console.log(arrayOne);

// let valueOnee = "2";
// let valueTwoo = 2;

// console.log(valueOnee==valueTwoo);
// console.log(valueOnee===valueTwoo);



// //conditional stmnts

// //if

// let value = 15;
// if (value>=18)
//     {
//         console.log(Adult);
//     }
//     else{
//         console.log("Minor")
//     }


// //ternory

// let age1 = 20;
// let type = (age1>=18)? "Adult" : "Minor"
// console.log(type);


// //operators

// //assignment

// let x1 = 5;
// let y1 = 2;
// let z1 = x1 + y1;
// console.log(z1);

// //multiply
// let a1 = 5;
// let b1 = 2;
// let c1 = a1 * b1;
// console.log(c1);


// //operators
// let a2 = 3;
// let x2 = (100 + 50) * a2;
// console.log(x2)

// //assign
// let x3 = 10;
// x3 += 5;
// console.log(x3);


// let x4 = 10;
// x4 *= 5;
// console.log(x4);

// for (let i = 0; i < 5; i++) {
//     console.log("Hello World!");
// }


// // while loop
// let val = 1;

// while (val < 6) {
//     console.log(val); 
//     val += 1;
// }


// for (let i = 1; i < 6; i++) {
//     if (i == 4) 
//         break;
        
//     console.log(i);
// }


// for (let i = 0; i < 11; i++) {
//     if (i % 2 == 0) 
//         continue;
        
//     console.log(i);
// }


// let test = 1;

// do {
//     console.log(test);
//     test++;
// } while(test <= 5)


// let hour=15;
// if (hour < 18) {
//         greeting = "Good day";
//         console.log(greeting);
//       }


//       let hours=19
//  if (hours < 18) {
//         greeting = "Good day";
//         console.log(greeting);
//       } else {
//         greeting = "Good evening";
//         console.log(greeting);
//       }


// let time=25
//       if (time < 10) {
//         greeting = "Good morning";
//         console.log(greeting);
//       } else if (time < 20) {
//         greeting = "Good day";
//         console.log(greeting);
//       } else {
//         greeting = "Good evening";
//         console.log(greeting);
//       }


     
     
//       let i=2;
//       let j=4;
//       let k=i+j;
//       console.log(k);




//function

console.log("function");

function showString()
{
  console.log("Hello world");
}
showString();

var showString=function()
{
  console.log("Hello world");
}
showString();


var showString=()=>{
  console.log("Arrow function Hello world");
}
showString();


//map
var number=[1,2,3,4,5]
var square=number.map((num)=>{
  return num*num;
})
console.log(square);

var fruits=["apple","banana","mango"];
var uppercase=fruits.map((fruit)=>{
  return fruit.toUpperCase();
})
console.log(uppercase);

//structuring

var name="john";
var age=20;
var person={
  name,
  age,
  isStudent:true
}
console.log(person);

//destructuring

var person={
  name:"Akhil",
  age:20,
  isStudent:true
}
var{name,age,isStudent}=person;
console.log(name);
console.log(age);
console.log(isStudent);


//promises

var promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("promise resolved")
  },2000);
})

promise.then((result)=>{
  console.log(result);
})


//spread operator

var numbers=[1,2,3,4,5];
var newNumber=[...numbers,6,7,8];
console.log(newNumber);