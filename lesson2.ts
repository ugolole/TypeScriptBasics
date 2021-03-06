// In this lesson we look at different types used in typescript.
// create a variable with type number
let count: number = 12;

// an uninitialized array
let array: number[] = [1,3,3];

// initialized array
let otherArray: number[] = [1];

// boolean type
let bool: boolean = true;

// string type
let string: string = 'When life was simple'

// create any array, this needs to be avoided.
let otherTypeArray : any[] = [1, '2', true, "other data"]

// working with a group of related constants
enum Colors{
    Red = 0, Green = 1, Blue = 2
}

let backGroundColor : number = Colors.Red;

console.log('the colors are ',Colors.Blue, Colors.Green);
console.log(count);
console.log(array);
console.log(otherArray);
console.log(bool);
console.log(string);
console.log(otherTypeArray);
console.log(backGroundColor)

// Working with type assertions
let otherMessages : string;

// initialise the message variable.
otherMessages = "A B C";

// return true if message ends with c
let endsWith: boolean = otherMessages.endsWith('c');

// log the result of endsWith.
console.log(endsWith);

