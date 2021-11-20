class NewPoint{
    
    private readonly _x : number;
    private readonly _y: number;
    
    // A new point constructor with members set to optional.
    constructor(x?: number, y?:number) {
        // initialise the member variables.
        this._x = x;
        this._y = y;
    }
    
    // get distance method
    public GetDistance(){
        console.log("x value : ", this._x, "y value : ", this._y)
    }
    
    // mock draw method
    public Draw(){
        console.log('execute the draw method with x as ', this._x, " and y as ", this._y );
    }
}


let anotherPoint = new NewPoint(23,32);
anotherPoint.GetDistance();
anotherPoint.Draw();

class AnotherPoint{

    constructor(private _otherX?: number, private _otherY?: number) {
    }
    
    GetDistance(){
        console.log("other x value : ", this._otherX, " other y value : ", this._otherY);
    }
}

let anotherOtherPoint = new AnotherPoint(23, 9);
anotherOtherPoint.GetDistance();


class AnotherExampleClass{
    
    // Initialising constructor to accept optional parameters
    constructor(private _x?:number, private _y?:number ) {
        
    }
    
    set x(value : number){
        
        if(value < 0){
            throw new Error("value can't be less than zero");
        }
        this.x = value;
    }
    
    get x(){
        return this._x;
    }
}

let anotherExampleClass : AnotherExampleClass = new AnotherExampleClass();

anotherExampleClass.x = 12;
console.log( anotherExampleClass.x);