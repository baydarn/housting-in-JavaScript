//HOUSTING///////////
var x = 715; // x'i tanýmladýk ve 715 deðerini atadýk.
var y = 815; // y'yi tanýmladýk ve 815 deðerini atadýk.

alert(x + " ve " + y);

 function hoist(){
   a=20;
   var b=100;
 }

 hoist();
 console.log(a);
 console.log(b);/////b is undefined diyecek.




var x = 5; // Initialize x
console.log( x + " " + y);           // Display x and y
var y = 7; // Initialize y
//y undefined verir
//çünkü aþaðýda tanýmlanmýþ
//sonuç
//x is 5 and y is undefined
var x = 5; // Initialize x
var y; // declare y
console.log( x + " " + y);           // Display x and y
y = 7; // Initialize y
//burda da y undefined verir

var x = 5; // Initialize x
var y = 7; // Initialize y
console.log( x + " " + y);           // Display x and y


x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
console.log(x + " ");
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y

const person1={
    set name(newName){
      console.log(newName);
  }
  }
  //this won't work
  const person2={}
  Object.assign(person2,person1)
  
  //but this will work:
  const person3 = {}
  Object.defineProperties(person3,Object.getOwnPropertyDescriptors(person1));
  ///as you can see with a simple console test
  person1.name='x';


console.log(b); ///aslýnda burada var b; demiþiz gibi bu ifade
var test3 = function test4() {
 console.log(a);
}
var b = 3;
var a = function test(){};
test3();

function hoist() {
  a = 20;
  var b = 100;
 }
 //hoist();
 console.log(a);
 /*
 Accessible as a global variable outside hoist() function
 Output: 20
 */
 console.log(b);
 /*
 Since it was declared, it is confined to the hoist() function scope.
 We can't print it out outside the confines of the hoist() function.
 Output: ReferenceError: b is not defined
 */
 

const PI = 3.142;

PI = 22/7; // Let's reassign the value of PI

console.log(PI); // Output: TypeError: Assignment to constant variable.


function getCircumference(radius) {
  console.log(circumference)
  circumference = PI*radius*2;
  const PI = 22/7;
}

getCircumference(2) // ReferenceError: circumference is not defined
