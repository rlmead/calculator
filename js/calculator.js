// declare class Calculator
class Calculator {
    // ## view
        // function generateElement to put elements in the html

        function init() {
            // add div [bootstrap] class = container
            // add div [bootstrap] class = row
            // add output div [bootstrap] class = col-12
            // add button divs [bootstrap] class = col-3 (col-6 for 0?)
        }

        // function to update output display
            // get instructions for what to output from controller

        // other things that will change in view:
        // buttons: change color on hover, outline when clicked

        // manage colors here?
        // bootstrap classes to declare at top level:
        // text-center
        // text-color: light

    // ## Modle
        // define data parameters:
        // rawData, c for controller, display

        // function to set initial values for data:
        // init ()
            // rawData = []; // updated by controller
            // c = controller;
            // display = 0;

        // function to update state when button is pressed:
            // append button output (number/operator/both) to rawData
            // run evaluate rawData function
            // return output to be updated in view

        // function to evaluate rawData
            // check if there's an operator in rawData
            // if so, split on operator and concatenate stuff either side, and perform operation (when equals sign has been pressed... but not if it's just numbers right?)
            // when does rawData get cleared?


            
        }
        
        //         ## Controller
        let controller = {
            // to wrap all other functions
            
            // clickhandlre(s)
            // - reg click 
            // - send and update the modle
            // - send and update view
            // -   
        }
        
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
}