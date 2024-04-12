"use strict";
class Person {
    constructor(name) { this.name = name; }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(this.name + "\n" + this.id);
    }
}
let student1 = new Student("vuong", 12);
student1.displayInfo();
