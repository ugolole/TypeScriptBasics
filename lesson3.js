// Declaring functions in js
let jsFunc = function (message) {
    console.log(message);
};
// declaring in ts
let tsFunc = (message) => {
    console.log(message);
};
// using the declared functions above.
jsFunc('js function message');
tsFunc('ts function message');
// declaring a much shorter function also known as arrow function.
let tsShorterFunc = (message) => console.log(message);
// calling ts shorter function
tsShorterFunc('ts shorter function');
// arrow function without parameter
let tsArrowFunc = () => console.log('arrow function without parameters');
tsArrowFunc();
