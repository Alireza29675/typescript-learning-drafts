var myName: string = "Alireza";
var myLastName: string = "Sheikholmolouki";

interface Human {
    name: string,
    lastname: string
}

const alireza: Human = {
    name: myName,
    lastname: myLastName
}

console.log(`${ alireza.name } ${ alireza.lastname }`);