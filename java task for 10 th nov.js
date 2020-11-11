
let arr=[1,2,3,4,4,6,5,6];


//remove duplicates

let arr=[1,2,3,4,4,6,5,6];
let nodupe=function(){
   return arr.filter((b,index)=>arr.indexOf(b)===index);
}();

nodupe;
//let nodupe=arr.filter((b,index)=>arr.indexOf(b)===index);
//nodupe;

//odd numbers of an array
let odd=function(){
    return arr.filter(ele=>ele%2===1);
}();
odd;

//sum of all numbers in an arrar
let sum=function(){
    return arr.reduce((add,ele)=>add=add+ele,0);
}();
sum;

   //prime numbers
  
   
   function isprime(a)
   {
       if(a===2)
   {
       return true;
   }
   if(!(a%2) || a<2 ){
       return false;
   }
    
 // console.log(a);
   for(i=3;i<Math.sqrt(a);i++){
       if(a%i===0){
       return false;
   }
   }
   return true;
   }
   let prime=function(){
    return arr.filter(ele=>isprime(ele));
}();
 prime;
   


let strarr=['ask','dad','recive','seek','dnnd','find'];
 //all strings to title caps

 let caps=function(){
     return strarr.map(ele=>ele.toUpperCase())
 }();
 caps;

 // palidrome
 
 
let st=['cac','bab','ara','aededea','loge'];

let sepwords=st.filter(function(ele){ 
    return ele==ele.split('').reverse().join('');
});

sepwords;




//median of two sorted array

let a=[9,6,7,1,5];
let b=[4,6,7,3,4];
let a1=a.concat(b);

a1=a1.sort((x,y)=>x-y);

let median=function(){
    let mid=a1.length/2;
    //let mid=Math.ceil(mid1);
    return((a1[mid]+a1[mid-1])/2);
}();
median;


// rotate k times

let v=[1,4,5,7,4,7,8,33,55,6];

let rotate=5;
let rotated=function(){
for(i=0;i<rotate;i++){
let shiftedv=v.shift();
v.push(shiftedv);
}
console.log(v);
}();

rotated;
