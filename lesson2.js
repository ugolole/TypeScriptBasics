// create a variable with type number
let count = 12;
// an uninitialized array
let array = [1, 3, 3];
// initialized array
let otherArray = [1];
// boolean type
let bool = true;
// string type
let string = 'When life was simple';
// create any array, this needs to be avoided.
let otherTypeArray = [1, '2', true, "other data"];
// working with a group of related constants
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let backGroundColor = Colors.Red;
console.log(count);
console.log(array);
console.log(otherArray);
console.log(bool);
console.log(string);
console.log(otherTypeArray);
console.log(backGroundColor);
// Working with type assertions
let otherMessages;
// initialise the message variable.
otherMessages = "A B C";
// return true if message ends with c
let endsWith = otherMessages.endsWith('c');
// log the result of endsWith.
console.log(endsWith);
