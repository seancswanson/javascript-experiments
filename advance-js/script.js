// function constructor

var sean = {
  name: 'sean',
  yearOfBirth: 1994,
  job: 'developer'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var sean = new Person('Sean', 1994, 'developer');

var jane = new Person('Jane', 1962, 'Designer');

var mark = new Person('Mark', 1955, 'Ops');

sean.calculateAge()

jane.calculateAge();

mark.calculateAge();

console.log(sean.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
