numberOfButtons = document.querySelectorAll("button").length;
var display ="";

for (var i=0; i<numberOfButtons; i++) { //Click event listener
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        buttonName = this.innerHTML //Check button name
        
        if (buttonName == "="){ //= is pressed
            answer = calculator(display);
            console.log(answer);
            display = answer;
            document.querySelector(".output").innerText = display;
        }
        else if (buttonName == "Clear"){ //Clear is pressed; resets display to blank
            display = "";
            document.querySelector(".output").innerHTML = "<br>";
        }
        else { //When = has not been pressed
            display += buttonName; //Concatenates buttonName to the number that is displayed
            document.querySelector(".output").innerText = display;
        }
        
    });
}

function calculator(display) { //Calculator that converts string to math
    if(display[0] == "-") {
        display = display.slice(1,);
        if (display.includes("+")){
            display = display.split("+");
            answer = -parseFloat(display[0])+parseFloat(display[1]);
        }
        else if (display.includes("-")){
            display = display.split("-");
            answer = -parseFloat(display[1])-parseFloat(display[2]);
        }
        else if (display.includes("*")){
            display = display.split("*");
            answer = -parseFloat(display[0])*parseFloat(display[1]);
        }
        else if (display.includes("/")){
            display = display.split("/");
            answer = -parseFloat(display[0])/parseFloat(display[1]);
        }
    }
    else {
        if (display.includes("+")){
            display = display.split("+");
            answer = parseFloat(display[0])+parseFloat(display[1]);
        }
        else if (display.includes("-")){
            display = display.split("-");
            answer = parseFloat(display[0])-parseFloat(display[1]);
        }
        else if (display.includes("*")){
            display = display.split("*");
            answer = parseFloat(display[0])*parseFloat(display[1]);
        }
        else if (display.includes("/")){
            display = display.split("/");
            answer = parseFloat(display[0])/parseFloat(display[1]);
        }
    }
    return answer;
}