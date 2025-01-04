// let arr = [1,2,3,4];
// console.log(arr[0]);
// console.log(typeof(arr));
// console.log("the numbers are:");

// for(let index=0; index< arr.length; index++){
//     console.log(arr[index]);


// } 

// for of loop 
//  for(let el of arr){
//     console.log(el);
//  }

 let marks = [85,97,44,37,76,60]
let sum = 0;
 for (let val of marks){
    console.log(val);
    sum = sum +val;
 }
 console.log(sum)
 let avg = sum /6 ;
 console.log("the avg is ",avg)
