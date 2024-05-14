// const pi = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * pi;
// console.log("Area 1: ", area)
// radius = 4;
// area = radius * radius * pi;
// console.log("Area 2: ", area)

const pi = 3.14;
let radius = 3;
function circleArea(radius) {
  const area = radius * pi;
  return area
}
// radius is 3;
area = circleArea(3);
console.log("Area1:", area);
// radius is 4;
area = circleArea(4);
console.log("Area2:", area);