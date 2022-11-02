// creazione cella classe
const eleGrid = document.querySelector('.grid');

// ciclo per tutti i quadrati
for (let i = 0; i < 100; i++) {

    // stampa dei numeri 
    eleGrid.innerHTML += `<div class=".grid">${[i]}</div>`

    // creazione elemento HTML per le celle 
	const eleCell = document.createElement('div');

    // creazione di un elemento nuovo
	eleCell.classList.add('cell');

    // mettere un contenuto all'interno di un elemento
	eleGrid.append(eleCell);

    // funzione per cui se cliccli si colora collegato a CSS
	eleCell.addEventListener('click', function () {
		this.classList.toggle('active')
	});
}