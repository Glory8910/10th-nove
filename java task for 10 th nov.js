
let arr=[1,2,3,4,4,6,5,6];


//remove duplicates

(function(){
   return arr.filter((b,index)=>arr.indexOf(b)===index);
})();



//odd numbers of an array
(function(){
    return arr.filter(ele=>ele%2===1);
})();

//sum of all numbers in an arrar
(function(){
    return arr.reduce((add,ele)=>add=add+ele,0);

})();
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
    

   for(i=3;i<Math.sqrt(a);i++){
       if(a%i===0){
       return false;
   }
   }
   return true;
   }


(function(){
    return arr.filter(ele=>isprime(ele));
})();

   


let strarr=['ask','dad','recive','seek','dnnd','find'];
 //all strings to title caps

 (function(){
     return strarr.map(ele=>ele.toUpperCase())
 })();


 // palidrome
 
 let st=['cac','bab','ara','aededea','loge'];

 (function(){
    return st.filter(ele=>ele==ele.split('').reverse().join(''));
    
 })();


//median of two sorted array

let a=[9,6,7,1,5];
let b=[4,6,7,3,4];

(function(){
let a1=a.concat(b);

a1=a1.sort((x,y)=>x-y);


    let mid=a1.length/2;
   
    return((a1[mid]+a1[mid-1])/2);
})();



// rotate k times

let v=[1,4,5,7,4,7,8,33,55,6];

let rotate=5;
(function(){
for(i=0;i<rotate;i++){
let shiftedv=v.shift();
v.push(shiftedv);
}
console.log(v);
})();
