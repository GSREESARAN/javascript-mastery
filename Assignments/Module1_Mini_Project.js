const studentName = "Saran";
let age = 21;
const course = "CSE";
const college = "ACE Engineering College";
const dreamCountry = "Japan";
const isGraduate = true;
const marks = 80;
const likesCoding = true;
console.log("=================================");
console.log("\t STUDENT INFORMATION \t");
console.log("=================================");
console.log("Name :"+studentName);
console.log("Age :"+age);
console.log("Course :"+course);
console.log("College :"+college);
console.log("Marks :"+marks);
console.log("Graduate :"+isGraduate);
console.log("Likes Coding :"+likesCoding);
console.log("Dream Country :"+dreamCountry);
console.log("=================================");
console.log("Data Types");
console.log("Name "+typeof studentName);
console.log("Age "+typeof age);
console.log("Course "+typeof course);
console.log("College "+typeof college);
console.log("Marks "+typeof marks);
console.log("Dream Country "+typeof dreamCountry);
console.log("Graduated "+typeof isGraduate);
console.log("Likes Coding "+ typeof likesCoding);
console.log("=================================");
console.log("Calculations");
console.log("Marks + 5 =" + (Number(marks)+5));
console.log("Marks - 10 = "+(Number(marks)-10));
console.log("Marks * 2 = "+(Number(marks)*2));
console.log("Marks / 2 = "+(Number(marks)/2));
console.log("Marks % 2 = "+(Number(marks)%2));
console.log("=================================");
console.log("Comparisons");
console.log("Age >= 18 :", age>=18);
console.log("Age >= 21 :", age>=21);
console.log("Marks === 80 :", marks===80);
console.log("Marks == 80 :", marks==80);
console.log("=================================");
console.log("isGraduate && likesCoding", isGraduate && likesCoding);
console.log("isGraduate || likesCoding", isGraduate || likesCoding);
console.log("!isGraduate", !isGraduate);


function greetStudent(name) {
    return "Welcome "+name;
}

const greeting = (name) =>{ return "Welcome "+ name;}


const greet = greetStudent(studentName);
console.log("=================================")
console.log("Function output")
console.log(greet);
console.log(greeting(studentName));

