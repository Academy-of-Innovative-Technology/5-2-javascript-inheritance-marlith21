/* === EXERCISE 1 CODE ALONG === */
// Original Parent Class

class Pet {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  displayPet() {
    console.log(`Pet Name: ${this.name}`);
    console.log(`Breed: ${this.breed}`);
  }
}

class Dog extends Pet {
  constructor(name, breed, age) {
    super(name, breed); 
    this.age = age;
  }

  displayDog() {
    console.log(`Dog Name: ${this.name}`);
    console.log(`Breed: ${this.breed}`);
    console.log(`Age: ${this.age}`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever", 3);
myDog.displayDog();



/* ==== EXERCISE 2 ==== */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayPerson() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayStudent() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); 
    this.subject = subject;
  }

  displayTeacher() {
    console.log(`Teacher Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Subject: ${this.subject}`);
  }
}

const student1 = new Student("Alice", 16, "10th Grade");
student1.displayStudent();

console.log("-------------------");

const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");
teacher1.displayTeacher();
