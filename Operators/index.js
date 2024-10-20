// arithmetic operators = operands (values, variables, etc.)
                        //   operators (+ - * /)
                        //   ex. 11 = x + 5;
let student = 30;

// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student ** 2;
let extraStudents = student % 3;
console.log(extraStudents);

student += 1;
student -= 1;
student *= 2;
student /= 2;
student **= 2;
student %= 2;

student++;
student--;

// let Current_students;
// Current_students = ++student;
// console.log(Current_students);

// document.getElementById("textshow").textContent = `Current student in your class is : ${Current_students}`;


// We always use  boadmas theory for that:  https://byjus.com/maths/bodmas-rule/


// operator precedence
// 1. parenthesis ()
// 2. exponents
// 3. multiplication & division & modulo
// 4. addition & subtraction

let result = 1 + 2 * 3 + 4 ** 3;
              1 + 2 * 3 + 64 //(4*4*4);
              1 + 6 + 64
              7+64
            //The output is: 71
console.log(result);