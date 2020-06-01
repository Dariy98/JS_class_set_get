class User {
  constructor(firstName, lastName, age, gender, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }
  get isAdult() {
    if (this.age < 18) {
      return `User ${this.firstName} ${this.lastName} is not adult`;
    } else {
      return "User is adult";
    }
  }
}

class Developer extends User {
  constructor(firstName, lastName, age, gender, phone, industry, rate, days) {
    super(firstName, lastName, age, gender, phone);
    this.position = "Developer";
    this.industry = industry;
    this.rate = rate;
  }
  get fullName() {
    return `Name of this dev - ${this.firstName} ${this.lastName}`;
  }
  set fullDays(days) {
    this.days = days;
  }
  get fullSalary() {
    return `Salary of this month: ${this.rate * this.days}`;
  }
}

class Designer extends User {
  constructor(firstName, lastName, age, gender, phone, industry) {
    super(firstName, lastName, age, gender, phone);
    this.position = "Designer";
  }
  set newTask(task) {
    this.task = task;
    this.implementation = false;
  }
  get newTask() {
    return `Designer get a new task - ${this.task}`;
  }
  set doneTask(implementation) {
    this.implementation = implementation;
  }
  get doneTask() {
    return `Task done because it - ${this.implementation}`;
  }
}

const user = new User("Jonny", "Black", 32, "male", "333444");
const user2 = new User("Bill", "Kock", 12, "male", "007007");
const developer = new Developer(
  "Peter",
  "Krash",
  25,
  "male",
  "888888",
  "Front-end",
  100
);
const dev2 = new Developer(
  "Lusi",
  "Dou",
  40,
  "female",
  "121212",
  "Back-end",
  100
);
const designer = new Designer("Ann", "Backer", 27, "female", "909090");

console.log(user, user.isAdult);
console.log(user2, user2.isAdult);

console.log(developer, developer.fullName);
developer.fullDays = 25;
console.log(developer.fullSalary);

console.log(dev2, dev2.fullName);

console.log(designer);
designer.newTask = "new layout";
console.log(designer.newTask);
designer.doneTask = true;
console.log(designer.doneTask);
