// tady je místo pro náš program

let jmeno = prompt("Jaké je Tvoje jméno?");
let prijmeni = prompt("Jaké je Tvoje příjmení?");
let rokNaroz = Number(prompt("Napiš rok narození", "RRRR"));

const aktualRok = 2023;

function spoctiVek() {
    let vek = (aktualRok - rokNaroz);
    let vystupProgramu = document.querySelector(".vystupProgramu");
    vystupProgramu.innerHTML = jmeno + " " + prijmeni + " " + vek;
}

let barva = prompt("Jaká je Tvoje oblíbená barva?", "in English");

function zmenBarvu() {
    let vystup = document.querySelector(".vystup");
    vystup.style.backgroundColor = barva;
}

spoctiVek()
zmenBarvu()


