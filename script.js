let Buttons = document.getElementsByClassName('btn');

function setValue(b) {
    let input = document.getElementById('inp');

    if (input.value === "ERROR") {
        input.value = " ";
        return;
    }

    if (b === "=") {
        try {
            input.value = eval(input.value)
        }
        catch (err) {
            input.value = "ERROR";
        }
    }
    else if (b === "del") {
        input.value = input.value.slice(0, input.value.length - 1);
    }
    else if (b === "AC") {
        input.value = ""
    }
    else if (b === "/" || b === "." || b === "+" || b === "-" || b === "*") {
        let last = input.value.slice(input.value.length - 1, input.value.length)
        if (last !== "/" && last !== "." && last !== "+" && last !== "-" && last !== "*") {
            input.value = input.value + b
        }
    }
    else {
        input.value = input.value + b;
    }
}


for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', () => { setValue(Buttons[i].textContent) }
    )
}