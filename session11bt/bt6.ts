class Product{
    protected _name: string;
    protected _price: number;
    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    getDescription() {
        console.log(this._name + "\n" + this._price);
    }
}

class Electronics extends Product{
    private _brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this._brand = brand;
    }
    getDescription(){
        console.log(this._name + "\n" + this._price + "\n" + this._brand);
    }
}

let electronics1 = new Electronics("iphone", 1000, "apple");

electronics1.getDescription();