class Person {
    private name: string;
    private age: number;

    constructor(name:  string, age:  number) {
        this.name  =  name;
        this.age  =  age;
    }

    tellMyName(): void {
        console.log("Mon nom est " + this.name + ", ");
    }

    tellMyAge(): void {
        console.log("j'ai " + this.age + " ans.")
    }
}

const person1 = new Person("John", 40);
const person2 = new Person("Marie", 35);
person1.tellMyName();
person1.tellMyAge();
person2.tellMyName();
person2.tellMyAge();

