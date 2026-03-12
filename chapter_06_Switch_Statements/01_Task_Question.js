let side1 = 30;
let side2 = 30;
let side3 = 30;
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");

}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");

}

else {
    console.log("Scalene Triangle");
}
