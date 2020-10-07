## PesudoCode



## Requirements
To complete the assignment, you must complete the following:

You must not use eval()

The calculator must be Object Oriented, utilizing Class, not Object.prototype

The app should be completely rendered via JS, no HTML besides a <div id="app">

The calculator should have a display area at the top.

The display should show 0 by default.

The calculator should have 6 function buttons:

Division /

Multiplication *

Subtraction -

Addition +

Calculate =

Clear c

The calculator should have 10 number buttons, 0-9.

The calculator should have a decimal button .

The display area should update as a user presses buttons.

When the user clicks a function button after the first and second values are entered (instead of =), the result 

of the calculation should be saved and the calculator should allow for a new number input (for example: 1 then + 
then 3 then -, etc.)

When the calculate button = is pressed, the calculator should apply the operation to the two stored numbers in 
the appropriate order (important for subtraction and division) and update the display.

When the clear button c is pressed, all stored data should be erased and the display should show 0 again.




## generateCal
            ## view

Function init()     // to wrap all other functions



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


    function calCreate()
            // body ref
        - var body = document.getElementsByTagName("body")
            // 
        - var table = documnet.createElemnt ("numtTable")
        - document.createElement()
        - top leve container div 
        - row cerate.elemnet div 
            - function gernerate0() col-12
        row div -col 3 for the rest of the calculator
        -nothing but coloms for the rest of the 1-9
            -lable squares 1-9
        -// PSG zero into a col-6

        // color coordinated

        ## Controller
clickhandlre(s)
- reg click 
- send and update the modle
- send and update view
-   


        ## Modle
function state()
- uptake the reg clicks
- track states of 
    currently displayed on calculator
- where are we in arithmatic
- remember last operation/state/number and last number
- be able to clear state = all clear
- have states for : results- result state only occure after '=' is hit
                    equations


//a file for every class
// class is like a funtion for creating objects
    //each object created will have the same peroperties but dose not need to fill them all with a value and will have diffrenent values
    ex.
        class example{
            constructor(){

            }
        }
    run loop to make 16 new items operater num, special, dipalys
        var examplle1 = new example
calculator (mothship) class
    VIEW (toplevel)\
        # toplevel button class(
            id for button = key/content?
            bootstrape class
            content/value)
            {
            'id': 'thing1',
            'class': 'col-4',
            'value': 1
}
                numneral button class
                class number{
                        object of tile
                        1 2 3 4 5 6 7 8 9 0
                            view
                            control
                            model

                operater button class 
                +-*/ (.?)
                    view
                    control
                    model
                    
                diplay area class
                    view
                    control
                    model

                special class?
                    view
                    conntrol
                    model
            
CONTOL(top Level)- handels operation
        




Model (top Level)- is the state, all data+

