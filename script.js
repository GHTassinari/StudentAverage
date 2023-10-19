let student = prompt("What's the student's name?");
let n1 = prompt("Insert the first grade:");
let n2 = prompt("Insert the second grade:");
let n3 = prompt("Insert the third grade:");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;
const result = average > 6;
average = average.toFixed(2);

if (result) {
  alert(
    "Congratulations! " + student + " you passed and got an average of: " + average
  );
} else {
  alert(student + ", study more for your next attempt, you got an average of: " + average);
}
