// A typescript function that when called logs the message to the console.
function log(message) {
    console.log(message);
}
var message = "hello world";
log(message);
// Create a function that iterate through a fix number of elements and produces a result
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally the result of i : ', i);
}
doSomething();
