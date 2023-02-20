// rest operator 
// in rest operator we can pass any number of argument there is no restriction of argumnet


// in vanila js when we work with argument 
function add(x,y,z){
    var sum=x+y+z;
    console.log(sum);
}
 add(2,3,4);
  add(2,3)
//   to add less no of parameter in vanila js it will give NaN
 add(2,3,4,5,3)

//  to overcome this problem the solution is rest operator 
// (...) it will give prototype array we can add large data as we want 


let num=(...num1)=>{
       console.log(num1);
}
num(11,23,33,12,12);  

let add_num=(...num2)=>{
    let final_ans=num2.reduce((count,element)=>{
        return count=count+element;
    },0);
    console.log(final_ans);
}
// we can pass any number of argument
add_num(1,2,3,4,5,6,7,8); 
add_num(1,2,3,4,5,6); 

// supppose i want to add two contact number then 
let std_info=(name,sub,email,...contact)=>{
    console.log(name,sub,email,contact);
} 
std_info("surya","mth","surya@get.com",46544,45454)
// by above rest operator should be the last parametr we cant use rest operator in between
   

// spread operator  (alternate of push method);
// (...)
let arr1=[1,2,3,4];
let arr2=[2,3,4,5];
let arr3=[11,12];

let final=["a","b",...arr1,"c",...arr2,"D",...arr3]
console.log(final);
