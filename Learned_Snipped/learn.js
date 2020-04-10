// Array.forEach()
var sampleArray = [124,6,3416,53,263,2];
function functionOne(value){
    return value*2;
}
var mainarray = sampleArray.map(functionOne);
// console.log(mainarray);

// Array.filter()
mainarray = sampleArray.filter(function2);
function function2(value){
return  value > 53;
 }
//  console.log(mainarray);

// Sum of all numbers in an array
function function3(total,currentValue){
    return total + currentValue;
}
var sum = sampleArray.reduce(function3);
// console.log(9>19);

// Understatnding this KeyWord java
var person = {
    firstName: "Mayank", 
    lastName: "Singhania",
    FullName: function(){
    var lastName = "Meena";
   
     return this.firstName +" "+ this.lastName ; 
    // remove this then see
         function myfunction(){
             return FullName;
         }

}
};

// console.log(person.FullName());

// Explicit Function Binding
var person1= {
    fullname: function(){
        return this.fname + " "+ this.lname;
    }
}

person2 = {
     fname: "Mayank",
     lname: 'Meena',

}
var p1fullname = person1.fullname.call(person2);
// console.log(p1fullname);

// Random function 
// sum = function(a, b){
// return a + b;
// }
var arr = [1,2,3,4,5,6,6];

/* now we wil define the sum function in different way but same purpose
*/
sum = (a, b) => a+b;
SUM=arr.reduce(sum);
console.log(SUM);



// SPLICE Method of array, this method can also b e used to remove the elements of an array
arr.splice(1,2, "as index position mentioned", "the next ele", "the test ele");
// console.log(arr);


