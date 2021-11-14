class OtherPointClass {
    
    x: number;
    y: number;
    
    // create a constructor and initialising it's values
    constructor(x? : number, y?: number) {
        this.x = x;
        this.y = y;
    }
    
    
    Draw(){
        console.log("draw x: ", this.x, "y: ", this.y);    
    }
    
    getDistance(){
        console.log("get distance  x: ", this.x, "y: ", this.y);
    }
}

let point : OtherPointClass = new OtherPointClass();

point.Draw();