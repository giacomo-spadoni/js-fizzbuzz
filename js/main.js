// creo ka costante che mi seleziona la sezione da modificare
const mySection = document.querySelector('section');
// inizio il ciclo per creare i numeri da 1 a 100
for (let count = 1; count <= 100; count++) {
    // creo la costante che mi aggiungerà un div
    const newDiv = document.createElement('div');
    const divToggle = newDiv.addEventListener('click', function () {
        this.classList.toggle('test')
    })
    // creo la condizione if se le il numero è divisibile per 3 o 5 o entrambi
    if (count % 3 === 0 && count % 5 === 0) {
        newDiv.textContent = 'Fizz-Buzz';
        newDiv.classList.add('fizz-buzz');
        divToggle
    } else if (count % 5 === 0) {
        newDiv.textContent = 'Buzz';
        newDiv.classList.add('buzz');
        divToggle
    } else if (count % 3 === 0) {
        newDiv.textContent = 'Fizz';
        newDiv.classList.add('fizz');
        divToggle
    } else {
        newDiv.textContent = count;
        divToggle
    }
    // "appendo" il div dentro la section
    mySection.append(newDiv);
}