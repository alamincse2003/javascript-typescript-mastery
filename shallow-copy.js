const user = {
  name: "Al Amin",
  address: {
    city: "Dhaka",
  },
};

const copy = { ...user };

copy.address.city = "Khulna";

console.log(user.address.city);
