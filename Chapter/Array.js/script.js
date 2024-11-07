// let marks=[67, 48,89,90,56];
// console.log(marks);
// console.log(marks.length);

//loop over array
// let friends=["apa","ayan","surojit","sudipta","supriya","saikat","sanjib","anup"];
// for(let i=0; i<friends.length;i++){
//     console.log("friends name",(friends[i]));
// }

//practice 1
// let marks=[45,85,98,87,76,94];
// let sum=0;
// for(let value of marks){
//     sum=sum+value;
// }
// let avareg=sum/marks.length;
// console.log(`average value of the sum= ${avareg}`);
// console.log("sum of total no=",sum);

// araay
// let numbers=[1,4,6,8,4];
// console.log(numbers);

//combined array
// let first=[1,2,3,4];
// let second=[6,7,8,9];
// let combined=first.concat(second);
// console.log (combined);

//iterating array  /(for of loop)
// let arr=[1,5,3,7,8,9];
// for( let value of arr){
//     console.log(value);
// }


//forEach loop
// let arr=[1,4,5,6,,9];
// arr.forEach(function(numbers){
//     console.log(numbers);
// })

// joined 
// let numbers=[1,8,5,9,0];
// const joined=numbers.join(',');
// console.log(joined);


//filtering
//let number=[1,-4,7,-8];
// let filtered=number.filter(function(value){
//     return value>=0;
// });
// console.log(filtered)
// let filtered=number.filter(value=>value>=0);
// console.log(filtered);

//mapping array
 let number=[1,2,3,4,5];
// let items=number.map(function(value){
// //     return 'student'+ value;
// // });
// // console.log(items);
let item = number.map((val)=>"student"+val);
 console.log(item); 