'use strict'

// This will read the JSON file and require it.
let students = require('./students.json');

// This will read over the student array and add Hello at the beginning.
students.forEach(function (obj) {
  console.log('Hello ' + obj.firstName + ' ' + obj.lastName);
});

// This will filter out the students with the last name starting with D.
let studentFilter = students.filter((elem) => {
  return elem.lastName.charAt(0) == 'D';
});

// Now it will spit out a message of how many hits it has received.
console.log('Count of last names starting with D is ' + studentFilter.length);