"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this._company = company;
        this._phone = phone;
    }
    printInfo() {
        console.log(`${this.name} \n ${this._company} \n ${this._phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`${this.name} \n ${this._company} \n ${this._phone} \n ${this.teamSize}`);
    }
}
let employee1 = new Manager("vuong", "PTIT", "012324231", 7);
employee1.printInfo();
