// declare class Calculator
class Calculator {
    constructor() {
        this.parent = document.getElementById('main');
    }
    // ## view
        // function generateElement to put elements in the html
    var view = {
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
    }

    var model = {
    // ## Modle
        // define data parameters:
        // rawData, c for controller, display
        
        // function to set initial values for data:
        function init() {
        // init ()
            // rawData = []; // updated by controller
            // c = controller;
            // display = 0;
        }
        // function to update state when button is pressed:
            // append button output (number/operator/both) to rawData
            // run evaluate rawData function
            // return output to be updated in view

        // function to evaluate rawData
            // check if there's an operator in rawData
            // if so, split on operator and concatenate stuff either side, and perform operation (when equals sign has been pressed... but not if it's just numbers right?)

        // function for clearing data
            // clear: while last item in rawData is a numeral, pop it
            // all clear: model.init()
        }
        
        //         ## Controller
        var controller = {
            // init function to wrap other init functions
                // call view.init()
                // call model.init()
            
            // clickhandlre(s) on buttons
                // - get output from button (number and/or operator)
                // - send and update the modle
                // - use output from model to update view
        }
        
}