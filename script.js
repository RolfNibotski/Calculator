
const calculator = document.querySelector(".calc-container");
const keys = calculator.querySelector(".keys");
const display = calculator.querySelector(".display");
const previousKeyType = calculator.dataset.previousKeyType;
let firstValue = "0";
let secondValue = "0";
let result = 0;
let calculation = "";

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        let keyText = key.textContent;
        let displayText = display.textContent;

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))

        if (!action) {
            
            if (displayText === "0" || calculator.dataset.previousKeyType === "operator"){
                display.textContent = keyText;
            } else {
                display.textContent = displayText + keyText;
            }
            calculator.dataset.previousKeyType = "number";
        }

        if (
            action === "add" ||
            action === "sub" ||
            action === "mul" ||
            action === "div" 
        ) {
            key.classList.add("is-depressed");
            display.textContent += keyText;
            calculator.dataset.previousKeyType = "operator";
            firstValue = display.textContent.slice(0, display.textContent.length -1);
            console.log(firstValue);
        }

        if (action ==="add"){
            calculation = "add";
            result = parseInt(firstValue) + parseInt(secondValue);
        }

        if (action ==="sub"){
            calculation = "sub";
            result = parseInt(firstValue) - parseInt(secondValue);
        }


        if (action ==="mul"){
            calculation = "mul";
            result = parseInt(firstValue) * parseInt(secondValue);
        }


        if (action ==="div"){
            calculation = "div";
            result = parseInt(firstValue) / parseInt(secondValue);
        }


        if (action === "decimal"){
            if (displayText.includes(keyText)){
                return
            } else {
                display.textContent += keyText;
            }
            

        }
        
        if (action === "clear"){
            display.textContent = "0";
        }

        if (action === "calculate"){
            console.log("calculate");
            secondValue = displayText;
            switch (calculation) {
                case "add":
                    result = parseFloat(firstValue) + parseFloat(secondValue);
                    break;
                case "sub":
                    result = parseFloat(firstValue) - parseFloat(secondValue)
                    break;
                case "mul":
                    result = parseFloat(firstValue) * parseFloat(secondValue);
                    break;
                case "div":
                    result = parseFloat(firstValue) / parseFloat(secondValue);
                    break;
                default:
                        console.log("calculation error");
                        break;
            }
            display.textContent = result;
            console.log(result)
        }
    }
})
