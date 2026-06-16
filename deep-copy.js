const user = {
  name: "Al Amin",
  address: {
    city: "Dhaka",
  },
};

const copy = structuredClone(user);

copy.address.city = "Khulna";
console.log(user.address.city); // Dhaka
console.log(copy.address.city); // Khulna
