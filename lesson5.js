class OtherPointClass {
    constructor(x, y) {
        x = x;
        y = y;
    }
    Draw() {
        console.log("x: ", this.x, "y: ", this.y);
    }
    getDistance() {
        console.log("x: ", this.x, "y: ", this.y);
    }
}
let point = new OtherPointClass(2, 5);
point.Draw();
