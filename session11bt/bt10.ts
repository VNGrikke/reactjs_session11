class Shape2 {
    calculatePerimeter(width: number, height: number): number;
    calculatePerimeter(radius: number): number;

    calculatePerimeter(arg1?: number, arg2?: number): number {
        if (arg1 !== undefined && arg2 !== undefined) {
            return 2 * (arg1 + arg2);
        } else if (arg1 !== undefined) {
            return 2 * Math.PI * arg1;
        } else {
            return 0;
        }
    }
}

class Rectangle2 extends Shape2 {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Circle2 extends Shape2 {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}
let rectangle2 = new Rectangle2(3, 6);
console.log("Chu vi hình chữ nhật:", rectangle2.calculatePerimeter());

let circle2 = new Circle2(3);
console.log("Chu vi hình tròn:", circle2.calculatePerimeter());
