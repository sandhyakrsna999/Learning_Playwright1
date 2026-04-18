// Q1: Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));     // true → environment check
console.log(url.startsWith("https"));     // true → secure check
console.log(url.endsWith("/dashboard"));  // true → page check

console.log("——");


// Q2: Extract Status Code from Log using Regex

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];

console.log(status); // 500

console.log("——");


// Q3: Generate Test ID with Padding

let env = "staging";
let moduleName = "auth";   // ⚠️ avoid 'module' keyword in Node.js
let count = 7;

let testId = `${env}_${moduleName}_${String(count).padStart(3, "0")}`;

console.log(testId); // staging_auth_007

console.log("——");


// Q4: Normalize and Compare Strings

let actual = " PASS ";
let expected = "pass";

let result = actual.trim().toLowerCase() === expected;

console.log(result); // true

console.log("——");


// Q5: Convert Query Params to Object

let testUrl = "https://app.com/search?query=login&page=2&sort=asc";

let params = Object.fromEntries(
    testUrl.split("?")[1].split("&").map(p => p.split("="))
);

console.log(params);
// { query: 'login', page: '2', sort: 'asc' }

console.log("——");


// Q6: Mask Sensitive Token

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret";

// ⚠️ Safe regex (works everywhere)
let masked = token.replace(/Bearer .+/, "Bearer ***REDACTED***");

console.log(masked); // Bearer ***REDACTED***