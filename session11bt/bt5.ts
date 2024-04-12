class Vehicle {
    protected _engineType: string;
    private _color: string;
    constructor(engineType: string, color: string) {
        this._engineType = engineType;
        this._color = color;
    }
    start() {
        console.log(`khởi động động cơ ${this._engineType} .`);
    }
}

class Car extends Vehicle {
    private _model: string;
    constructor(engineType: string, color: string, model: string) {
        super(engineType, color);
        this._model = model;
    }

    drive() {
        // Có thể truy cập _engineType vì nó là protected
        console.log(`${this._model} màu ${this._color} với động cơ ${this._engineType} `);
    }
}

let car = new Car("xăng", "xanh", "Toyota");
car.start(); 
car.drive(); 
