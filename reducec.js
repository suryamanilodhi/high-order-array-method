// reduce high order array method
// in vanila js we use counter as well as loop but by using reduce we can do both operation

// in vanila js we we want to add element of array
var arr1=[1,2,3,45,6];
var sum=0;
for(var i=0; i<arr1.length; i++){
    sum=sum+arr1[i];
}
document.write(sum+"<br>"); 

// now reduce()
// reduce has two parameter counter as well as element
var arr1=[1,1,2,3,4,5,6];
var ans1=arr1.reduce((count,element)=>{
      return  count=count+element;
},0) 
document.write( `the sum of all element is ${ans1}<br>`) 

var arr2=[23,1,2,3,4,5];
var ans2=arr2.reduce((x,y)=>{
       return  x=x+y;
},0);
document.write(ans2+"<Br>"); 

// suppopse i want to product of all element then 
var arr3=[1,2,3,4]; 
var ans3=arr3.reduce((x,y)=>{
    return x=x*y;
},1); 
document.write(ans3+"<Br>"); 

// write sum of salary using only reduce 

var emp_info=[
    {name:"john",email:"john@gmail.com",salary:5000},
    {name:"tom",email:"tom@gmail.com",salary:4000}
] 
var ans4=emp_info.reduce((count,element)=>{
    return count=count+element.salary;
},0)
document.write(ans4);






