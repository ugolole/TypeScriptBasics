// create a variable with type number
var count = 12;
// an uninitialized array
var array = [1, 3, 3];
// initialized array
var otherArray = [1];
// boolean type
var bool = true;
// string type
var string = 'When life was simple';
// create any array, this needs to be avoided.
var otherTypeArray = [1, '2', true, "other data"];
// working with a group of related constants
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var backGroundColor = Colors.Red;
console.log(count);
console.log(array);
console.log(otherArray);
console.log(bool);
console.log(string);
console.log(otherTypeArray);
console.log(backGroundColor);
