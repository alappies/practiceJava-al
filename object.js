// _______1)Consider this variable:

// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   getData: function() {
//       return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
//   }
// }

// Write the code that accesses the first name of the person object.
// console.log(person.firstName);
// Write the code that accesses the last name of the person object.
// console.log(person.lastName);
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet);
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.getData());


//______2) Consider this variable:

// var product = {
//     name: "chair", price: 14.99,
//     describeProduct: function () {
//         return `The product is a ${this.name}. It costs ${this.price} `
//     }
//   }
//   console.log(product.describeProduct());

// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

//_____3) Consider this variable:

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    recipe: function() {
      return  `The ingredients for a ${this.name} are ${this.ingredients}.`
    }
  }

// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients);
// Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2]);
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.recipe());
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

//______4) Consider this vairable:

// var animals = [
//     { name: "Waffles", type: "dog", age: 12 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 },
//   ]

// Create a function that takes in any array of objects and returns a new array with only those of type cat.
// var catsOnly = animals.filter(value => value.type === "cat")
// console.log(catsOnly)
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
// console.log(animals.name);