// String

let string1 = "hello world";

//console.log(string1);

let primoCarattere = string1.charAt(0);
let primoCarattere1 = string1[0];

let indiceDiWorld = string1.indexOf("world");
//console.log(indiceDiWorld);

let porzioneStringa = string1.slice(0, 5);
//console.log(porzioneStringa);

let sostituisciTesto = string1.replace("world", "2a Web")
//console.log(sostituisciTesto);

let string1Uppercase = string1.toUpperCase();
//console.log(string1Uppercase);

let string1Lowercase = string1.toLowerCase();

let arrayString = string1.split("");
//console.log(arrayString);

let arrayWordsString = string1.split(" ");
//console.log(arrayWordsString)

let textWithDash = arrayString.join("-");
//console.log(textWithDash);


// UNDEFINED
let variable;
//console.log(variable);

// NULL
let nullVariable = null;
//console.log(typeof null);

// BOOLEAN
let booleanVariable = false;
//console.log(typeof booleanVariable);

// OPERATORI

// comparazione
let uguali = "ciao" == "ciao";
let numeriUguali = 12 === "12";
let maggiore = 12 > 24;
let minore = 10 < 21;

// aritmetici
const somma = 4 + 6;
const sottrazione = 6 - 4;
const moltiplicazione = 10 * 3;
const divisione = 20 / 2;
const resto = 10 % 3; // operatore modulo;
const potenza = 8 ** 3;

// logici
const and = true && true;
const and1 = true && false;
const and2 = false && false;
const and3 = true && "" && false;
//console.log(and3);

// truthy, falsy
// undefined, null, "", false -> falsy
// resto -> truthy

const or = true || true;
const or1 = true || false;
const or2 = false || false;
//console.log(or2);

const not = !true;
const trueVar = !not;

const x = (true && !false) || false;

// operatori su stringhe
const str1PlusStr2 = "ciao" + " " + "mondo";
const str3 = "ciao" + 2;
const sumStr = "12" + 12;
const stringToNumber = Number("12")
const stringToNumber1 = parseInt("12");
const stringToNumber2 = +"12"
//console.log(stringToNumber2);

// CICLO FOR
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

let action = 1;
if(action === 1) {
    //console.log("action is 1")
} else if(action === 2) {
    console.log("action is 2")
} else if(action === 3) {
    console.log("action is 3")
} else {
    console.log("action not found");
}

// switch
switch(action) {
    case 1:
        //console.log("action is 1")
        break;
    case 2:
        //console.log("action is 1")
        break;
    default:
        //console.log("action not found");
        break;
}


// switch con condizioni
switch(true) {
    case action <= 2: // true | false 
        //console.log("action is lower than 2");
        break;
    case action === 3:
        //console.log("action is 3")
    default:
        //console.log("action not found");
        break;  
}

// passaggio di parametri nelle funzioni

function myFunction(a, b) { // firma della funzione
    // istruzione da eseguire
    console.log("Hello from myFunction()")
    if(a === "ciao") {
        console.log("ciao");
    }
}

myFunction("ciao", "mondo")

function sommaFun(a,b) {
    console.log(a + b);
}

sommaFun(2,4);