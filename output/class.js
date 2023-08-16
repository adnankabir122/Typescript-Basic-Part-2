"use strict";
class Student {
    //contructor ditei hobe 
    constructor(name, id, address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    getData() {
        console.log(`Name: ${this.name}\nId: ${this.id}\nAddress: ${this.address}`);
    }
}
let std1 = new Student("Adnan", 478, "Mohammadpur");
std1.getData();
