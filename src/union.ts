// akta variable/function ke akadhik datatype set kore deya 
let userDetails:string | number | boolean;
userDetails = true 
console.log(userDetails)

function display(id:string | number){
    console.log(id);
}
// calling the function 
display(15)
