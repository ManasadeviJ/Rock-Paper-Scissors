function myFunction (msg) {
    console.log(msg);
}

myFunction('HEy Future manas');


function sum(a,b) {
    console.log("the sum of a,b are ", a+b);
    //  or  (s = a+b); return s;
}
sum(3,4);

function mul(x,y) {
    s =  x*y;
    return s;
}
let val = mul(78,10);
console.log(val);

//   arrow function

const summ = (a,b) => {
console.log(a+b);
}
summ(3,4);


const printHello =() => {
    console.log("hello");
}
printHello();

console.log("------------------------");

function vowelsFinder () {

}
function countVowels (str) {
    count = 0;

    for(let i = 0; i< str.length;i++){
        // console.log(str[i]);
        let char = str[i].toLowerCase();
        if(char === 'a' ||
           char === 'e' ||
           char === 'i' ||
           char === 'o' ||
           char === 'u'
         ){
            count++;

        }
    }
    console.log(count);
}
countVowels("jjj");


const performTast = (str) => {
    count = 0;

    for(let i = 0; i< str.length;i++){
        // console.log(str[i]);
        let char = str[i].toLowerCase();
        if(char === 'a' ||
           char === 'e' ||
           char === 'i' ||
           char === 'o' ||
           char === 'u'
         ){
            count++;

        }
    }
    console.log(count);
    
}
performTast("eedc");

//  forEach

let cousins = ["Manas" , "priya", "Aravind" , "Vaish","sanku"];

cousins.forEach((char,index , array) => {
console.log(char , index ,array);
});

let num = [67 ,4,5,6];
num.forEach((char)=>{
    console.log(char*char);
})

//  filter
let filterArray = num.filter((val) =>
{
    return val % 2 != 0 ;
});

console.log(filterArray);

let marks = [56 ,67,98,89,97];

let newmarks = marks.filter((val) => {
    return val > 90 ; 
});
console.log(newmarks);


let n = prompt("Enter a number:");
