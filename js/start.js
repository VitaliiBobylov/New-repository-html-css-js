// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apartmentRating = apartment.rating;
// const aptRating = apartmentRating;
// console.log(aptRating);
    
// const apartmentDescr = apartment.descr;
// const aptDescr = apartmentDescr;
// console.log(apartmentDescr);

// const apartmentPrice = apartment.price;
// const aptPrice = apartmentPrice;
// console.log(apartmentPrice);

// const apartmentTags = apartment.tags;
// const aptTags = apartment.tags;
// console.log(aptTags);







// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const apartmentRating = apartment["rating"]
// const aptRating = apartmentRating;
// console.log(aptRating);

// const apartmentDescr = apartment["descr"]
// const aptDescr = apartmentDescr;
// console.log(aptDescr);

// const apartmentPrice = apartment["price"]
// const aptPrice = apartmentPrice;
// console.log(aptPrice );

// const apartmentTags = apartment["tags"]
// const aptTags = apartmentTags;
// console.log(aptTags);



// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// console.log(apartment.price);

// apartment.rating = 4.7;
// console.log(apartment.rating);

// apartment.owner.name = "Henry Sibola";
// console.log(apartment.owner.name);

// apartment.tags.push("trusted")
// console.log(apartment.tags);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },

// };
// apartment.area = 60;
// console.log(apartment.area);

// apartment.rooms = 3;
// console.log(apartment.rooms);

//  const applocation = {};

//     applocation.country = "Jamaica";
//     applocation.city = "Kingston";

//     apartment.applocation = applocation;

// console.log(apartment.applocation.city);
// console.log(apartment.applocation.country);



// console.log(apartment);



// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
// name,
// price,
// image,
// tags,
// };
// console.log(product.price);


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials.password);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// for (const key in apartment){
//     console.log(key);
//     console.log(apartment[key]);
// }



// const keys = ["descr","rating","price"];
// const values = ["Spacious apartment in the city center","4","2153"];


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys){
    
//     console.log(apartment[key]);
// }


// const values = ["descr","rating","price"];
// const keys = ["Spacious apartment in the city center","4","2153"];





// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }


// function countProps(object){
//     return Object.keys(object).length;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

 
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// console.log(keys);

// const values = Object.values(apartment);
// console.log(values);


// const keys = apartment;
// const values = apartment;


// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const salaryValues = Object.values(salaries);
//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }



// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex); 
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];


// const product = products.find(item => item.name === productName);
//   return product ? product.price : null;
// }



// console.log(getProductPrice("Radar"));
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// const values = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
    
//   }



// console.log(getAllPropValues("category"));



// const atTheOldToad = {
//     potions: [],

//     getPotions() {
//         return "List of all available potions";
//     },

//     addPotion(potionName) {
//     return `Adding ${potionName}`;
    
// }
// };
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     this.potions.push(potionName);
//   }
// };


// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
    
//   },

// };





// function add(a,b,c) {
//   console.log(`Addition result equals  ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// console.log(add);



























// 11111111111111111111111111111111111111111111
// function isEnoughCapacity(products, containerSize) {
//   const totalItems = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
//   return totalItems <= containerSize;
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false



// 2222222222222222222222222222222222222222222222222222222
// function calcAverageCalories(days) {
//   if (days.length === 0) {
//     return 0; // Повертаємо 0, якщо масив порожній
//   }

//   const totalCalories = days.reduce((sum, day) => sum + day.calories, 0);
//   return totalCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0



// 333333333333333333333333333333333333

// const profile = {
//     username: "Jacob",
//   playTime: 300,

//   changeUsername(newName){
// this.username = newName;
//   },
//   updatePlayTime(hours){
//     this.playTime = hours;
//   },
// getInfo(){
//     return `${this.newName} has ${this.playTime} active hours!`;
// }
// }




// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = null;
// const pointer = null;
















// 1111111111111111111111111111111111111111111111111111111


// const getUserNames = (users) => {
// return users.map(user => user.name);
// };


// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// );

// 222222222222222222222222222222222222222222222222222
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];


// const getUsersWithFriend = (user, friendName) => {
// return user.filter((item) => item.friends.includes(friendName));
// };





// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

//  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

//  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []




// 333333333333333333333333333333333333333333333333

// const friends = [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ];


// const sortByDescendingFriendCount = (users) => {
//   return [...users].toSorted((a, d) => a.friends.length - d.friends.length);
// };


// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );

// 44444444444444444444444444444444444444444444444444


// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// const getTotalBalanceByGender = (users, gender) => 
//   users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);


// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// console.log(result);

// const pointer = makePizza;
// console.log(pointer);
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
  

// }
// console.log(
// makeMessage("Royal Grand", makePizza) );

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza  ${pizzaName}`);
    
// })


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
//  console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
 
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// const changeEven = (numbers, value) => 
//   numbers.map(num => (num % 2 === 0 ? num + value : num));


// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
 
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
    
    
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },

// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }
// showThis();


// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
  
// };



// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));


// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);;
// child.name = "Jason";
// child.age = 27;


// console.log(ancestor.hasOwnProperty("surname"));


// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}


// class Car {
//   constructor (brand, model, price) {
// this.brand = brand;
// this.model = model;
// this.price = price;
//   }
// }


// console.log(new Car("Audi", "Q3", 36000));

// console.log(new Car("BMW", "X5", 58900));

// console.log( new Car("Nissan","Murano", 31700));

// class Car {
//   constructor (params) {
// this.brand = params.brand;
// this.model = params.model;
// this.price = params.price;
//   }
// }



// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000}));

// console.log(new Car({ brand: "BMW", model: "X5", price: 58900}));

// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));



// class Car {
//   constructor (params) {
// this.brand = params.brand;
// this.model = params.model;
// this.price = params.price;
//   }


// getPrice() {
//   return this.price;
// }

// changePrice(newPrice) {
//   this.price = newPrice;
// }

// }


// class Car {
//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }
//    changePrice(newPrice) {
//     this.price = newPrice;
//   }
// getBrand(){
//   return this.#brand;
// }
// changeBrand(newBrand){
//   this.#brand = newBrand;
// }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
 

// class Car {
//   #price;
//   static maxPrice = 50000;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) { 
//     if (newPrice <= Car.maxPrice) {
//     this.#price = newPrice;
//   }}
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User{
//    static role =  {BASIC: "basic", SUPERUSER: "superuser"}
// }

// console.log(Admin.role.SUPERUSER);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {

//     constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     }

//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"



// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = [];
//   }
//    blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//    isBlacklisted(email){
//     return this.email.includes(email);
//   }
//   }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true





















1111111111111111111111111111111111111111
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
  
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   setOrder(cost, order) {
//    this.balance -= cost - (cost * this.discount);
//    this.orders.push(order);
//   },

// };
// customer.setOrder(5000, "Steak");
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// console.log(customer.getBalance()); // 19500
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


222222222222222222222222222222222222222222222222222

// class Storage {

// #items;

// constructor(initialItems) {
//   this.#items = initialItems;
// }
//   getItems( ) {
// return this.#items;
//   }
//   addItem(newItem) {
// this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
// const index = this.#items.indexOf(itemToRemove);
// if (index !== -1) {
//   this.#items.splice(index, 1);
// }}}





// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// 33333333333333333333333333333333333333333333333333

// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//    this.#value = initialValue;
//   }
//   getValue(){
//     return this.#value;
//   }
//   padEnd(str){
// this.#value += str;
//   }
//   padStart(str){
// this.#value = str + this.#value;
//   }
// padBoth(str){
// this.#value = str + this.#value + str;
// }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
