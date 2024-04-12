class Employee {
    public name: string;
    protected _company: string;
    private _phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this._company = company;
        this._phone = phone;
    }
    printInfo(){
        console.log(`${this.name} \n ${this._company} \n ${this._phone}`)
    }
}

class Manager extends Employee{
    teamSize: number;
    constructor(name:string,company:string,phone:string,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
}

let employee1 = new Manager("vuong","PTIT","012324231",7)
console.log(employee1);
