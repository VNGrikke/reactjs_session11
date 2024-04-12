"use strict";
class Shape2 {
    calculatePerimeter(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            return 2 * (arg1 + arg2);
        }
        else if (arg1 !== undefined) {
            return 2 * Math.PI * arg1;
        }
        else {
            return 0;
        }
    }
}
class Rectangle2 extends Shape2 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle2 extends Shape2 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
let rectangle2 = new Rectangle2(3, 6);
console.log("Chu vi hình chữ nhật:", rectangle2.calculatePerimeter());
let circle2 = new Circle2(3);
console.log("Chu vi hình tròn:", circle2.calculatePerimeter());
