/*console.log("Hii");

localStorage.setItem("name", "John Doe");
localStorage.setItem("name", "siri");
localStorage.setItem("age", "30");
localStorage.setItem("city", "New York");

//localStorage.removeItem("age");

let customer = {
    name: "John Doe",
    age: 30,
    city: "New York",
    phone: "123-456-7890"
};
localStorage.setItem("customer", JSON.stringify(customer));

localStorage.getItem("customer",JSON.parse(customer))

localStorage.setItem("name", "Jjjjj");
let cusName = localStorage.getItem("name");
console.log(cusName);

*/

const studentList = [];

function btnAddStudentOnAction() {
    let student = {
        studentId: document.getElementById("txtStudentId").value,
        studentName: document.getElementById("txtStudentName").value,
        studentAge: document.getElementById("txtStudentAge").value,
        studentAddress: document.getElementById("txtStudentAddress").value
    }
    console.log(student);
    studentList.push(student);
    alert("Student added successfully..");
    localStorage.setItem("studentList", JSON.stringify(studentList));
}
function btnSearchByIdStudentOnAction() {
    let studentList = JSON.parse(localStorage.getItem("studentList"));
        let student = studentList.find(student => {
            return student.studentId === document.getElementById("txtStudentId").value
        });
    document.getElementById("txtStudentName").value = student.studentName;
    document.getElementById("txtStudentAge").value = student.studentAge;
    document.getElementById("txtStudentAddress").value = student.studentAddress;
}
function btnUpdateByIdStudentOnAction() {
    alert("Update by Id Student Button Clicked");
}
function btnDeleteByIdStudentOnAction() {
    alert("Delete by Id Student Button Clicked");
}
function btnClearStorageOnAction() {
    localStorage.clear();
}
function btnLoadAllStudentsOnAction() {
    alert("Load All Students Button Clicked");
}

