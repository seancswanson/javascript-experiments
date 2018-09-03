// function constructor

// var sean = {
//   name: 'sean',
//   yearOfBirth: 1994,
//   job: 'developer'
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//
//   }
//
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// }
//
// Person.prototype.lastName = 'Smith';
//
// var sean = new Person('Sean', 1994, 'developer');
//
// var jane = new Person('Jane', 1962, 'Designer');
//
// var mark = new Person('Mark', 1955, 'Ops');

// sean.calculateAge()
//
// jane.calculateAge();
//
// mark.calculateAge();
//
// console.log(sean.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// Object.create

// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// }
//
// var sean = Object.create(personProto);
// sean.name = 'sean';
// sean.yearOfBirth = 1994;
// sean.job = 'dev';
//
// var jane = Object.create(personProto, {
//   name: { value: 'Jane'},
//   yearOfBirth: { value: 1979},
//   job: { value: 'Designer'},
// });

//  Primitives vs  Objects


// Primitives
var a = 42;
var b = a;

a = 46;

// console.log(a, b);


// Objects
var obj1 = {
  name: 'John',
  age: 26
}

var obj2 = obj1;

obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// Functions

// var age = 24;
// var obj = {
//   name: 'Sean',
//   city: 'Seattle'
// };
//
// function change(a, b) {
//   a = 30;
//   b.city = 'San Fran';
// }
//
//
// change(age, obj)
//
// console.log(age)
// console.log(obj.city)

// Passing functions as arguments

var years = [1994, 1993, 1292, 2005, 2002];

function arrayCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }

  return arrRes;
}

function isFullAge(el) {
  return el >= 18;
}

function calculateAge(el) {
  return 2018 - el;
}

// console.log(arrayCalc(years, calculateAge))
console.log(arrayCalc(years, isFullAge))
