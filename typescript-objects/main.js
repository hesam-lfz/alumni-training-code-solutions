'use strict';
const student = { firstName: 'Ali', lastName: 'Vo', age: 29 };
const fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
console.log(student, typeof student);
