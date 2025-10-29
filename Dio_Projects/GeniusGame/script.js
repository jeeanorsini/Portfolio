let order = [];
let clickedOrder = [];
let score = 0;
let canClick = false; // Controla se o jogador pode clicar

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

// --- Referências aos Elementos ---
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// --- Funções do Jogo ---

// Retorna o elemento da cor com base no número
const createColorElement = (color) => {
    if (color === 0) return green;
    if (color === 1) return red;
    if (color === 2) return yellow;
    if (color === 3) return blue;
};

// Função para criar um atraso (delay)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mostra a sequência de cores piscando
const playSequence = async () => {
    canClick = false;
    await delay(500); // Pausa antes de começar a sequência

    for (const colorIndex of order) {
        const element = createColorElement(colorIndex);
        element.classList.add('selected');
        await delay(500); // Tempo que a cor fica acesa
        element.classList.remove('selected');
        await delay(250); // Tempo entre as cores
    }

    canClick = true; // Libera os cliques para o jogador
};

// Prepara o próximo nível
const nextLevel = () => {
    score++;
    clickedOrder = []; // Limpa os cliques da rodada anterior

    // Adiciona uma nova cor aleatória à sequência
    const newColor = Math.floor(Math.random() * 4);
    order.push(newColor);

    playSequence();
};

// Verifica se a ordem clicada está correta
const checkOrder = () => {
    for (const i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            return; // Encerra a função se o jogador errou
        }
    }

    // Se o jogador acertou a sequência inteira, avança de nível
    if (clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Preparando próximo nível...`);
        setTimeout(nextLevel, 1000);
    }
};

// Processa o clique do jogador em uma cor
const click = (color) => {
    if (!canClick) return; // Ignora o clique se não for a vez do jogador

    clickedOrder.push(color);
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder(); // Verifica a jogada após o efeito visual
    }, 250);
};

// Funções de início e fim de jogo
const gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para reiniciar.`);
    order = [];
    clickedOrder = [];
    score = 0;
    playGame();
};

const playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando novo jogo!');
    score = 0;
    nextLevel();
};

// --- Event Listeners ---
green.addEventListener('click', () => click(0));
red.addEventListener('click', () => click(1));
yellow.addEventListener('click', () => click(2));
blue.addEventListener('click', () => click(3));

// --- Inicia o Jogo ---
playGame();