class numberTile{
    constructor(){
            this.value = value;
            this.otherPropertyy = otherProperty;
            this.specialProperty = specialProperty
    }
    //methods

}
var number1= new number("1","someotherPropertty1");
var number2= new number("2","someotherproperty2");
    // word new set vale = to "this'"


//key word new 
    //creaters a new empty pbject{}
    //-sets the value of "this: to be the new empty object
    //- calls the constructor method"
 // a smal changer for git hub


 class Calculator {
    ...


    createButtons() {
        for (let i ... ) {
            let b = new Button(...);
            b.show();
        }
    }
    showButtons() {

    }
}

class Button {
    // Model
    constructor(id,type) {
        this.id = id;
        this.type = type;
    }

    // Controller


    // View
    show() {
        console.log(this.type);
    }
}

class NumeralButton extends Button{
    constructor(id) {
        super(id,'numeral');
        this.class = 'col-4 bg-dark';
    }
    // can redefine methods (and parameters?) that are defined in parent
}
