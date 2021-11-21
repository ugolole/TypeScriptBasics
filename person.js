// An implementation of the person object.
export class Person {
    // A person constructor with optional properties
    constructor(_name, _age, _height, _weight) {
        this._name = _name;
        this._age = _age;
        this._height = _height;
        this._weight = _weight;
    }
    // Get the value for the name of this person.
    get name() {
        return this._name;
    }
    // Set the name of this person object.
    set name(value) {
        if (value.length == 0) {
            throw new Error("value can't be empty");
        }
        this._name = value;
    }
}
