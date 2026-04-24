// 1. What is an object in JavaScript?
// An object is a collection of key-value pairs.
let user = { name: "Sandhya", age: 30 };
console.log("Object:", user);

console.log("-------------------------------");


// 2. How do you access object properties?
// Properties can be accessed using dot or bracket notation.
console.log("Dot:", user.name);
console.log("Bracket:", user["age"]);

console.log("-------------------------------");


// 3. Difference between dot and bracket notation
// Dot notation is used for fixed property names.
// Bracket notation is used for dynamic keys (variables) or keys with spaces.

// Example:
let person = { name: "Sandhya" };
let key = "name";
console.log("With key ", person[key]); // works -> Sandhya
console.log("With . ", person.key);    // undefined

console.log("-------------------------------");


// 4. How to add and delete properties?
// Add using assignment, delete using delete keyword.
user.city = "Hyderabad";
console.log("After add:", user);

delete user.age;
console.log("After delete:", user);

console.log("-------------------------------");


// 5. How to check if a property exists?
// Use 'in' operator or hasOwnProperty().
console.log("name in user:", "name" in user);
console.log("hasOwnProperty:", user.hasOwnProperty("city"));

console.log("-------------------------------");


// 6. What is Object.keys()?
// Returns all keys as an array.
console.log("Keys:", Object.keys(user));

console.log("-------------------------------");


// 7. What is Object.values()?
// Returns all values as an array.
console.log("Values:", Object.values(user));

console.log("-------------------------------");


// 8. What is Object.entries()?
// Returns key-value pairs as array of arrays.
console.log("Entries:", Object.entries(user));

console.log("-------------------------------");


// 9. How to loop through an object?
// Use for...in loop to iterate keys.
for (let k in user) {
    console.log("Loop:", k, user[k]);
}