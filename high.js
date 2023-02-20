//  map :- map is high order array method we use map in array structure

arr1=[23,24,25,25,26,36,366]; 
// map with anynomous entry
// when we return something we need to store in variable 
var ans1=arr1.map((element,index,arr1)=>{
    document.write(element+":-"+index+":"+arr1+"<br>");
     return element;
});   

// map with callback function 
let arr2=["a","b","c","d","e","f"]; 

// by callback entry 
var fun1=((element,index,arr2)=>{
    document.write(element+"_"+index+":-"+arr2+"<br>") 
    return element;
}) 
arr2.map(fun1); 

// filter 

arr3=[12,14,16,28,19,24,25]
var ans3=arr3.filter((element)=>{
    
    return element%2==0;
})
document.write(ans3+"<br>"); 

// other high order array method find();
// find will find first indext only 

var arr3=[16,12,14,18,17,19,10];

var ans3=arr3.find((element)=>{
    return element%2!=0;
})
document.write(ans3+"<br>");

// other high order array method 
// findIndex(); 
// findIndex is going to find index of particular data

var arr6=[23,24,25,26,26,43];
var ans6=arr6.findIndex((element)=>{
    return element%2==0;
})
document.write(ans6+"<BR>")





