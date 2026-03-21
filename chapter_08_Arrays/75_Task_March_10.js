/* Exercise 1 : API Response Validation
You receive an array of API response codes.Write code to:
1. Check if ALL responses are successful(200–299)

2. Find the FIRST non - success code

3. Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503];
*/

console.log("....Example 1......");

let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if ALL responses are successful(200–299)
let allSuccess = responses.every(code => code >= 200 && code <= 299);

// 2. Find the FIRST non - success code
let firstnonsuccess = responses.find(code => code < 200 || code > 299);

// 3. Return all unique error codes
let uniqueErrorcodes = [...new Set(responses.filter(code => code < 200 || code > 299))];

console.log("All Success:", allSuccess);
console.log("First Error:", firstnonsuccess);
console.log("Unique Errors:", uniqueErrorcodes);


/* Exercise 2 — Spot the Bug
What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);
*/

console.log("....Example 2......");
// sort() in JavaScript sorts values as strings (not numbers) by default.

let responseTimes = [320, 85, 1200, 450, 99];

let sorted = responseTimes.sort((a, b) => a - b);

console.log("Fastest:", sorted[0]);

/*  Exercise 3 — Deep vs Shallow Copy (Tricky)

What is the output and why? How would you fix it?

javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);
*/

console.log("....Example 3......");

// The output is 'fail' because the spread operator creates a shallow copy. The inner object is still shared between both arrays. To fix this, we need a deep copy using map with spread or JSON methods
let suite1 = [{ name: "login", status: "pass" }];

// Deep copy
let suite2 = suite1.map(test => ({ ...test }));

suite2[0].status = "fail";

console.log(suite1[0].status); // pass 
console.log(suite2[0].status); // fail

