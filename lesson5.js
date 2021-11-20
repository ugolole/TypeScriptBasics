class OtherPointClass {
    // create a constructor and initialising it's values
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Draw() {
        console.log("draw x: ", this.x, "y: ", this.y);
    }
    getDistance() {
        console.log("get distance  x: ", this.x, "y: ", this.y);
    }
}
let point = new OtherPointClass();
point.Draw();
