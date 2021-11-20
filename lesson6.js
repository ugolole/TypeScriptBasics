class NewPoint {
    // A new point constructor with members set to optional.
    constructor(x, y) {
        // initialise the member variables.
        this._x = x;
        this._y = y;
    }
    // get distance method
    GetDistance() {
        console.log("x value : ", this._x, "y value : ", this._y);
    }
    // mock draw method
    Draw() {
        console.log('execute the draw method with x as ', this._x, " and y as ", this._y);
    }
}
let anotherPoint = new NewPoint(23, 32);
anotherPoint.GetDistance();
anotherPoint.Draw();
class AnotherPoint {
    constructor(_otherX, _otherY) {
        this._otherX = _otherX;
        this._otherY = _otherY;
    }
    GetDistance() {
        console.log("other x value : ", this._otherX, " other y value : ", this._otherY);
    }
}
let anotherOtherPoint = new AnotherPoint(23, 9);
anotherOtherPoint.GetDistance();
