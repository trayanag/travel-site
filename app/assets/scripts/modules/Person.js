class Person{
    constructor(name,favColor){
        this.name = name;
        this.favColor = favColor;
    }
    greet(){
        console.log('Hello my name is' + " " +this.name + " " +'and my favColor is'+ " " + this.favColor)
    }
}

export default Person