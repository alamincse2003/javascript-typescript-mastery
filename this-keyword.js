const person = {
  name: "Rahim",

  sayName() {
    console.log(this.name);
  },
};

person.sayName();

const another = {
  name: "Karim",
  sayName: person.sayName,
};

another.sayName();
