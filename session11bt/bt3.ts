class Person{
    name:string;
    constructor(name:string) {this.name = name}
    displayInfo(){
        console.log(this.name);
    }
}

class Student extends Person{
    id:number;
    constructor(name:string,id:number) {
        super(name);
        this.id = id;
    }
    displayInfo(){
        console.log(this.name+"\n"+this.id);
    }
}

let student1 = new Student("vuong",12)
student1.displayInfo();