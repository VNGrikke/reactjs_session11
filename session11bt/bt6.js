"use strict";
class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getDescription() {
        console.log(this._name + "\n" + this._price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this._brand = brand;
    }
    getDescription() {
        console.log(this._name + "\n" + this._price + "\n" + this._brand);
    }
}
let electronics1 = new Electronics("iphone", 1000, "apple");
electronics1.getDescription();
