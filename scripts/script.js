let i = 0;
const final = 399;
const numTela = document.querySelector('.variable');

function carregaClients() {
    if (i <= final) {
        numTela.innerHTML = i;
        i++;
        const delay = i >= 350 ? 20 : 1; // Atraso maior quando próximo do final
        setTimeout(carregaClients, delay); // Chama a função novamente após o atraso
    }
}

// Inicializa a função
carregaClients();

