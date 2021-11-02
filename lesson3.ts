// In this lesson we look at different ways of creating methods also known as functions.
let jsFunc = function (message){
    console.log(message);
}

// declaring in ts
let tsFunc = (message : string) =>{
    console.log(message);
}

// using the declared functions above.
jsFunc('js function message');
tsFunc('ts function message');

// declaring a much shorter function also known as arrow function.
let tsShorterFunc = (message) => console.log(message);

// calling ts shorter function
tsShorterFunc('ts shorter function')

// arrow function without parameter
let tsArrowFunc = () => console.log('arrow function without parameters');

tsArrowFunc();

// creating custom types
// Inline annotation.
let drawPoint = (point : { x: number, y: number} ) => {
    // to do.
}

// creating an interface of points.
interface Point{
    x: number,
    y: number
}

let otherDrawPoint = (point : Point) =>{
    // to do
}

// other example a function that calculates the distance between points.
let distanceBetweenPoint = (pointA: Point, pointB: Point) => {
    // to do
}
