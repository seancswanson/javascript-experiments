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
//
// var years = [1994, 1993, 1292, 2005, 2002];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//
//   return arrRes;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function calculateAge(el) {
//   return 2018 - el;
// }
//
// function maxHeartRate(el) {
//   console.log(el);
//   if (calculateAge(el) >= 18 && calculateAge(el) <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }
//
// // console.log(arrayCalc(years, calculateAge))
// // console.log(arrayCalc(years, isFullAge))
// console.log(arrayCalc(years, maxHeartRate));

// Functions returning Functions

//
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//       return function(name) {
//         console.log(name + ', What subject do you teach?');
//       }
//   } else {
//       return function(name) {
//         console.log('What do you do, ' + name + '?');
//       }
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('Sean');
// designerQuestion('Sean');
// designerQuestion('Mark');
// designerQuestion('Michelle');
//
// interviewQuestion('teacher')('Sean');

// // iife
//
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
//
// game();

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// Closures
//
// function retirement(retirementAge) {
//   var a = ' years left until retirement';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a)
//   }
// }
//
// var retirementUS = retirement(66);
//
//
// retirementGerman = retirement(65);
//
// retirementIceland = retirement(67);
//
// retirementUS(1994);
// retirementGerman(1942);
// retirementIceland(1990);
// retirement(66)(1994);

//
// function interviewQuestion(job) {
//   return function(name) {
//     var question;
//     if (job === 'teacher') {
//       question = ', what subjects do you teach?';
//     } else if (job === 'designer') {
//       question = ', what is ux design?'
//     } else {
//       question = ', what do you do?'
//     }
//     var questionString = name + question;
//     console.log(questionString);
//   }
// }
//
// var teacherInterview = interviewQuestion('teacher');
// var designerInterview = interviewQuestion('designer');
// var basicInterview = interviewQuestion('basic');
//
// teacherInterview('Sean');
// designerInterview('Sean');
// basicInterview('Sean');

// Bind, Call, Apply
//
// var sean = {
//   name: 'Sean',
//   age: 24,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ' ladies and gentlemen! My name is ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
//     } else if (style === 'friendly') {
//       console.log('Good ' + timeOfDay + ' lassies and germs! I\'m a ' + this.job + ' and I\'m ' + this.age + ' years yung and bold. Have a ballin\' ' + timeOfDay + '!');
//     }
//   }
// }
//
// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// }
//
// // sean.presentation('formal', 'morning');
//
// sean.presentation.call(emily, 'friendly', 'evening');
//
// // sean.presentation.apply(emily, ['friendly', 'morning']);
//
// var seanFormal = sean.presentation.bind(sean, 'formal');
//
// seanFormal('morning');
//
// var emilyFormal = sean.presentation.bind(emily, 'formal');
//
// emilyFormal('early morning');

// 
// var years = [1994, 1993, 1292, 2005, 2002];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//
//   return arrRes;
// }
//
// function isFullAge(limit, el) {
//   return el >= limit;
// }
//
// function calculateAge(el) {
//   return 2018 - el;
// }
//
// var ages = arrayCalc(years, calculateAge);
//
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
//
// console.log(ages)
// console.log(fullJapan)
