class Vehicle{
    protected _name: string;
    protected _id: number;
    protected _speed: number;
    constructor(name: string, id: number, speed: number) {
        this._name = name;
        this._id = id;
        this._speed = speed;
    }
    slowDown(){
        this._speed -= 2;
        if (this._speed <=0) {
            this._speed = 0;
        }
    }
    speesUp(){
        this._speed += 2;
        if (this._speed >= 100) {
            this._speed = 100;
        }
    }
    showSpeed(){
        console.log(this._speed);
    }
}

class Bicycle extends Vehicle{
    private gear:number;
    constructor(name:string,id:number,speed:number,gear:number){
        super(name,id,speed);
        this.gear = gear;
    }
}

let bicycle1 = new Bicycle("Xe đạp Fixed Gear LIFE HORSE Vành 3 đao",1,40,60);
console.log(bicycle1);
bicycle1.slowDown();
bicycle1.showSpeed();
bicycle1.speesUp();
bicycle1.showSpeed();

