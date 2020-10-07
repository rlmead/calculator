// calculator (mothship) class
// ## generateCal
//             ## view
// Function init()     // to wrap all other functions

// diplay area class


// bootstrap classes to declare at top level:
    // text-center
    // text-color: light


function generateElemnt(
    type, id, classList, parent=false
    ){
    let newElement = document.createElemen(type);
    newElemnt.id = id
    newElement.setAttrbute("class", classList);

        if (parent){
            parent.appendChild(newElement);
        }else{
            return newElement;
        }
}


//     function calCreate()
//             // body ref
//         - var body = document.getElementsByTagName("body")
//             // 
//         - var table = documnet.createElemnt ("numtTable")
//         - document.createElement()
//         - top leve container div 
//         - row cerate.elemnet div 
//             - function gernerate0() col-12
//         row div -col 3 for the rest of the calculator
//         -nothing but coloms for the rest of the 1-9
//             -lable squares 1-9
//         -// PSG zero into a col-6

//         // color coordinated

//         ## Controller
// clickhandlre(s)
// - reg click 
// - send and update the modle
// - send and update view
// -   



//         ## Modle
// function state()
// - uptake the reg clicks
// - track states of 
//     currently displayed on calculator
// - where are we in arithmatic
// - remember last operation/state/number and last number
// - be able to clear state = all clear
// - have states for : results- result state only occure after '=' is hit
//                     equations


// //a file for every class
// // class is like a funtion for creating objects
//     //each object created will have the same peroperties but dose not need to fill them all with a value and will have diffrenent values
//     ex.
//         class example{
//             constructor(){

//             }
//         }
//     run loop to make 16 new items operater num, special, dipalys
//         var examplle1 = new example
let operators = [
    {
        'id': '+',
        'operation': function((n1,n2) => n1 + n2)
    }
]
for (x in operators) {
    let new_button = new OperatorButton();
}
