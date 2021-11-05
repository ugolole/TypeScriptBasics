class OtherPointClass {
    
    x: number;
    y: number;
    
    Draw(){
        console.log("Drawing something using the point class.")    
    }
    
    getDistance(){
        console.log('Getting the distance using the point class.')
    }
}

let point : OtherPointClass = new OtherPointClass();

point.Draw();