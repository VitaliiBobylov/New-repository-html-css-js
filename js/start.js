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

44444444444444444444444444444444444444444444444444


const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

const getTotalBalanceByGender = (users, gender) => 
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);


console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863




