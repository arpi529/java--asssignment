const student_name = prompt("Enter your name");
const student_age = Number(prompt("Enter your age"));
const student_marks = Number(prompt("Enter your marks"));

if (student_marks >= 95) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: A+\n#Awesome`);
}
else if (student_marks >= 90) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: A\n#Great`);
}
else if (student_marks >= 80) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: B\n#Good`);
}
else if (student_marks >= 70) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: C\n#Needs more practice`);
}
else if (student_marks >= 60) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: D\n#2X your efforts`);
}
else if (student_marks >= 50) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: E\n#marks doesn't matter !!`);
}
else if (student_marks >= 40) {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nGrade: F\n#boost your efforts`);
}
else {
    alert(`Name: ${student_name}\nAge: ${student_age}\nMarks: ${student_marks}\nResult: FAILED\n#demoted!`);
}