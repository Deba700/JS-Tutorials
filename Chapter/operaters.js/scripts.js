// operator
// let a=12;
// let b=6;

// console .log("a+b =",a+b);
// console.log( "a-b =",a-b);
// console .log("a*b =",a*b);
// console.log( "a/b =",a/b);
// console .log("a%b =",a%b);
// console.log( "a**b =",a**b);

//Assignment operator
// let a=6;
// let b=8;
// a +=4; //a=a+4;
// console.log("a=",a); //10

// comperison operator
// let a=5;
// let b=8;
// console.log("a==b",a==b);
// console.log("a!=b",a!=b);

//logical operator and(&&)
// let   a=9;
// let   b=6;
// let cond1 = a>b;
// let cond2 = a===9;
// console.log("cond1 && con2 =",cond1 && cond2);

//logical operator or(||)
// let a=6;
// let b=4;
// let cond1= a>b;
// let cond2= a=0;
// console.log("cond1||cond2",cond1||cond2);

//logical not
// let a=5;
// let b=6;
// console.log("!a===6",!(a===6));

//conditional statement
// let age=25;
// if(age>18){
//     console.log("you can vote");
// }

// let mode="light";
// let color;
// if(mode==="dark"){
//     color="black"
// }
// if (mode==="light"){
//     color="white";
// }
// console.log(color);

//turnary operator
// let age=34;
//  let result=age>=18?"adult":"not adult";
// console.log("result is",result);

//practice 1
//  let number= prompt("enter a number:");
//  if(number%5===0){
//     console.log("this number multiple of 5",)
//  }
//  else{
//     console.log("this number  not multiple of 5" ,)
//  }
//  let rectangle={
//    length:2,
//    breadth:4,

//    draw:function(){
//       console.log('drawing rectangale')
//    }
//  };

//factory function
// function createRectangle(len,bre){
//   return rectaangle={
//     length:len,
//     bredth:bre,

//     draw (){console.log('create rectangle')}
//   };
// };
// let rectangleobj1=createRectangle(7,9);
// let rectangleobj2=createRectangle(3,6);


// constructor function->pascal notetion->first letter of every word is capital
//constructor function->prop/methods->intilise/define
// function Rectangle(len,bre){
//   this.length=len,
//   this.breadth=bre,
//   this.draw=function(){
//     console.log('drawing');
//   };
// };
// //object creation using constructor function
// let rectangleobj=new Rectangle(5,8);


//for in loop
// let rectangle={
//   length:3,
//   breadth:5,
// };
// for(let key in rectangle){
//   //keys are reflected through key variable
//   //values are reflected through rectangle [key]
//   console.log(key,rectangle[key]);
// }


//for of loop
// for (let key of Object.entries(rectangle)){
//   console .log(key);
// }

//cloning
// let src={
//   a:3,
//   b:4,
//   c:6,
// };
// let dest={};
// for(let key in src){
//   dest[key]=src[key];
// }
// console.log(dest);

//object cloning #2
// let src={
//   a:3,
//   b:9,
//   c:6
// };
// let dest =Object.assign({},src);
// console.log(dest);
// //src.a++;
// console.log(dest);

//object clonning #3
let src={
  a:3,
  b:6,
  d:8
};
let dest ={
  ...src
};
console.log(dest);
src.a++;
console.log(dest);