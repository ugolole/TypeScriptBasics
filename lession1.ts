
var newMessage :string = "hello world";

// A typescript function that when called logs the message to the console.
function log(message){
    console.log(message);
}


log(newMessage);

// Create a function that iterate through a fix number of elements and produces a result
function  doSomething(){
    let i: number;

    for(i=0; i< 5; i++){
        console.log(i);
    }

    console.log('Finally the result of i : ', i)
}

doSomething();