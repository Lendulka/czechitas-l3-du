// tady je místo pro náš program

// firstName and surname

let firstName = prompt("What´s your name?").trim()
while (firstName === "") {
    alert("That's not a valid name :(")
    firstName = prompt("What's your name?")
}

let surname = prompt("What´s your surname?").trim()
while (surname === "") {
    alert("That's not a valid surname :(")
    surname = prompt("What's your surname?")
}

// calculate age

let yearBirth = prompt("What year were you born?", "YYYY").trim()
let currentYear = new Date().getFullYear()

while (yearBirth === "" || yearBirth === " " || isNaN(yearBirth) || yearBirth.length !== 4 ||
    !(Number(yearBirth) >= 1910 && Number(yearBirth) <= currentYear)) {
    alert("That's not a valid year of birth :(")
    yearBirth = prompt("What year were you born?")
}

let outputElm = document.querySelector(".output")

function calculateAge() {
    let age = (currentYear - Number(yearBirth))
    outputElm.innerHTML = `
        <p>Your name is: ${firstName.toUpperCase()} ${surname.toUpperCase()}</p>
        <p>Your age is: ${age}</p>
    `
}

calculateAge()

// change backgroundColor

let color = prompt("What is your favorite color?")

while (!color.match(/^(#[a-f0-9]{6}|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua|orange|brown|gold|grey|pink)$/i)) {
    alert("Your color has to be ONE WORD and in ENGLISH")
    color = prompt("What is your favorite color?")
}

function changeColor() {
    outputElm.style.backgroundColor = color
}

changeColor()




