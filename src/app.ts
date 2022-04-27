// type Admin = {
//   name: string;
//   privileges: string[];
// }
//
// type Employee = {
//   name: string;
//   startDate: Date;
// }
//
// // interface Admin {
// //   name: string;
// //   privileges: string[];
// // }
// //
// // interface Employee {
// //   name: string;
// //   startDate: Date;
// // }
// //
// // interface ElevatedEmployee extends Admin, Employee {}
//
// type ElevatedEmployee = Admin & Employee;
//
// const employeeE1: ElevatedEmployee = {
//   name: "Ellie",
//   privileges: ["create-server"],
//   startDate: new Date()
// };

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "MY COMPANY BITCH" }
};

console.log(fetchedUserData.job.title);

const userInput = '';
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
//
// type UnknownEmployee = Employee | Admin;
// console.log(typeof employeeE1);
//
//
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(`Name: ${emp.name}`);
//   if ("privileges" in emp) {
//     console.log(`Privileges ${emp.privileges}`);
//   }
//   if ("startDate" in emp) {
//     console.log(`Start Date: ${emp.startDate}`);
//   }
// }
//
// printEmployeeInformation(employeeE1);
//
// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }
//
// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//
//   loadCargo(amount: number) {
//     console.log("Loading cargo... " + amount);
//   }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car();
// const v2 = new Truck();
//
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(32);
//   }
// }
//
// useVehicle(v1);
// useVehicle(v2);
//
// //
//
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
//
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
//
// type Animal = Bird | Horse;
//
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log(`Moving at speed: ${speed}`);
// }
//
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
// userInputElement.value = "hi there";
//
// //
//
// interface ErrorContainer { // { email: "Not a valid email", username: "Must start with a character" }
//   [prop: string]: string;
// }
//
// const errorBag: ErrorContainer = {
//   email: "Not a valid email.",
//   username: "Must start with a capital character!"
// };