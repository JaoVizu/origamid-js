const bitcoin = document.querySelector('#bitcoin');

const fetchBitcoin = () => fetch('https://blockchain.info/ticker')
.then(r => r.json())
.then(r => mostrarDados(r))

const mostrarDados = data => {
    bitcoin.innerHTML = `O valor do Bitcoin neste momento é de: <strong>${data.BRL.buy.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</strong>`;
}

setInterval(fetchBitcoin, 1000 * 30);

// fetchBitcoin();