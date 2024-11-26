class Person {
    fullName: string;
    email: string;
    birthDay: Date;
    constructor(fullName: string, email: string, birthDay: Date) {
        this.fullName = fullName;
        this.email = email;
        this.birthDay = birthDay;
    }
}

class Employee extends Person {
    salary: number;
    constructor(fullName: string, email: string, birthDay: Date, salary: number) {
        super(fullName, email, birthDay);
        this.salary = salary;
    }
}

class Client extends Person {
    address: string;
    constructor(fullName: string, email: string, birthDay: Date, address: string) {
        super(fullName, email, birthDay);
        this.address = address;
    }
}

export { Employee, Client, Person };