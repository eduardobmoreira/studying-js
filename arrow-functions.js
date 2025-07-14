const studentFailed = (finalGrade, absence) => {
  if (finalGrade < 7 && absence > 4) {
    return true;
  } else {
    return false;
  }
}

console.log(studentFailed(6, 5)); // true
console.log(studentFailed(8, 2)); // false

const showName = (name) => name;

console.log(showName('Eduardo')); // Eduardo