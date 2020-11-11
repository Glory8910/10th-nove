let arr=[1,2,3,4,4,6,5,6];


//remove duplicates

let arr=[1,2,3,4,4,6,5,6];
let nodupe=arr.filter((b,index)=>arr.indexOf(b)===index);
nodupe;

//odd numbers of an array
let odd=arr.filter(ele=>ele%2===1);
odd;

//sum of all numbers in an arrar
let sum=arr.reduce((add,ele)=>add=add+ele,0);
sum;


   //prime numbers
  
   let prime=arr.filter(ele=>isprime(ele));
   
   
   
   function isprime(a)
   {
       if(a===2)
   {
       return true;
   }
   if(!(a%2) || a<2 ){
       return false;
   }
    
   console.log(a);
   for(i=3;i<Math.sqrt(a);i++){
       if(a%i===0){
       return false;
   }
   }
   
   
   return true;
   }
    prime;
   


let strarr=['ask','dad','recive','seek','dnnd','find'];
 //all strings to title caps

 let caps=strarr.map(ele=>ele.toUpperCase())
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
