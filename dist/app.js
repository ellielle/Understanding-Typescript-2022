"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1;
// user1 = new Person("Ellie");
user1 = new Person();
user1.greet("Hi there, I am");
