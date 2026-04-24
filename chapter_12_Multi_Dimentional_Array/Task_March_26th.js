// 1. Right angle Pattern

function printrightAngle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printrightAngle(5);

console.log("-----------------------------");


// 2. Inverted Pyramid

function printPattern(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";

        // spaces
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        // stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }

        console.log(row);
    }
}

printPattern(5);