console.log("Hii");

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
/*
localStorage.setItem("name", "Jjjjj");
let cusName = localStorage.getItem("name");
console.log(cusName);

*/


