﻿// In this lesson we will look at classes.

// Everything about a point is in class.
class Point {
    
    // fields.
    x: number;
    y: number;
    
    // methods.
    draw(){
        // .. logic used to draw a point.
        console.log('x: ' + this.x, + ' y: ' + this.y);
    }
    
    getDistance(){
        // .. logic used to get the distance of a point.
    }
}

