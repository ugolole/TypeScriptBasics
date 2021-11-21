// An implementation of the person object.
export class Person{
    
    // A person constructor with optional properties
    constructor(private _name?: string,
                private _age ?:number,
                private _height?:number,
                private _weight?:number) {
    }
    
    // Get the value for the name of this person.
    get name(){
        return this._name;
    }
    
    // Set the name of this person object.
    set name(value:string){
        if(value.length == 0){
            throw new Error("value can't be empty")
        }
        this._name = value;
    }
    
    // TODO: - add all the needed setters and getters for the private properties of this person class.
}
