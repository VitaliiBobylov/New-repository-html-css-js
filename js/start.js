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


function countTotalSalary(salaries) {
  let totalSalary = 0;

  const salaryValues = Object.values(salaries);
  for (const salary of salaryValues) {
    totalSalary += salary;
  }

  return totalSalary;
}



console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
