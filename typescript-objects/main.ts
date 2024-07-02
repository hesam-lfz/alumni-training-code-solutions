interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = { firstName: 'Ali', lastName: 'Vo', age: 29 };
const fullName: string = student.firstName + ' ' + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
console.log(student, typeof student);
