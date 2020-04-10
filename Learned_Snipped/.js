console.log("mayank meena is pro")
// window.alert("Error")
var m=17;
 m= "matlab";
m= ["mk", 6, 5735.38963]

// creating an object 
m = {
     firstname:'mayank', age:  19,
     lastname:'meena',  class: 'High Class',
     fullname: function(){
        var firstname= 'mk';
         return this.firstname+  " " +this.lastname ;
     }
};
console.log(m.fullname());
mk= typeof (m.class) + m['age'];
// console.log(mk);
var x = "Volvo" + 16 + 4;//print Volvo164
var x = 16 + 4 + "Volvo"; // prints 20Volvo
// console.log(x); 

//gfinding the length of the string 
var str = 'String Example, Mayank Meena';
// str=str.length;
var n = str.indexOf( 'ng'+ ' E');
console.log(n);
var search = str.match(/amp/g)
console.log(search);
var arr = str.split(',');
console.log(arr);
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);
console.log(obj);

//Sorting the Array of numbers in numerical order
var arr = [1,3,24,53,6746,32,78,645,54,4];
sortarray = function(a,b){
return a-b;
}
arr.sort();
// arr = Math.random();
console.log(arr);
// to sort in  random orter use 0.5 - Math.random() in return type 

// findin gthe min in an array 
Math.min.apply(null, arr);



//Object and notation
var cars = [
     {type:"Volvo", year:2016},
     {type:"Saab", year:2001},
     {type:"BMW", year:2010}
   ];

   cars[0].type + " " + cars[0].year + "<br>" +
   cars[1].type + " " + cars[1].year + "<br>" +
   cars[2].type + " " + cars[2].year;


