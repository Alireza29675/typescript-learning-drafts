interface Human {
    name: string,
    lastname: string
}

const people: Human[] = [
    { name: 'Alireza', lastname: 'Sheikholmolouki' },
    { name: 'Goudarz', lastname: 'Firoozi' },
    { name: 'Pedram', lastname: 'Safaeifar' }
];

for (let human of people) {
    console.log(human)
}