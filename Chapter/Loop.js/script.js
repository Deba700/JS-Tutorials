// for(let name=1;name<=5;name++){
//     console.log("deba");
// }


//calculate sum of 1 to 10;
// let sum=0;
// for(let i=1; i<=10; i++){
//     sum=sum+i;
// }
// console.log("the sum =",sum);

//while loop;
// i=1;
// while (i<=10) {
//     console.log("deba");
//     i++;
// }

//do while loop
//  let i=1;
// do{
// console.log("i=",i);
// i++;
// }
// while(i<=5);

//for of
// let str="java script";
// let size=0;
// for(let i of str){
//     console.log("i=",i)
//     size++;
// }
// console.log("string size=",size);



//for in loop
// let student={
//     name:"Debasish",
//     age:22,
//     cgpa:7.,
//     isPass:true,   
// };
// for (let key in student){
//     console.log("key=",key, "value=",student[key]);
// }

//print all the even and or number
// for( let i=1; i<=100; i++){
//     if(i%2===0){
//         console.log("this is even number=",i);}
//         else{
//             console.log("this is odd number=",i);}
//         }
    

//practice 2
// let geamnum=30;
// let usernum=prompt("gues the geam number");
// while(geamnum != usernum ){
//     usernum=prompt("you gues wrong number, gues again");
// }
// console.log("congrasulation you enterad a correct number",usernum);



//practice string
let fullname= prompt("enter full name without space");
let username=("@"+ fullname+ fullname.length);
console.log(username);