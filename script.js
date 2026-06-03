// Configuração da pergunta interativa
const dadosQuiz = {
    pergunta: "Qual é o maior desafio para a agricultura do futuro que nosso projeto busca resolver?",
    opcoes: [
        "Aumentar a produção gastando mais recursos naturais.",
        "Produzir de forma sustentável utilizando tecnologia eficiente.",
        "Isolar o campo das inovações digitais das grandes cidades.",
        "Substituir completamente a agricultura familiar por robôs."
    ],
    correta: 1, // Define que a segunda opção (índice 1) é a certa
    feedbackSucesso: "🎉 Excelente escolha! É exatamente nisso que focamos nosso projeto!",
    feedbackErro: "Pense um pouco mais pelo lado da sustentabilidade... Tente outra vez!"
};

// Captura dos elementos do HTML
const elementoPergunta = document.getElementById('pergunta');
const elementoOpcoes = document.getElementById('opcoes');
const elementoFeedback = document.getElementById('mensagem-feedback');

// Função que monta o quiz na tela
function carregarQuiz() {
    elementoPergunta.innerText = dadosQuiz.pergunta;
    elementoOpcoes.innerHTML = '';
    
    dadosQuiz.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.classList.add('btn-opcao');
        botao.innerText = opcao;
        botao.addEventListener('click', () => verificarResposta(index, botao));
        elementoOpcoes.appendChild(botao);
    });
}

// Função que valida a escolha do avaliador
function verificarResposta(indiceSelecionado, botaoClicado) {
    const botoes = document.querySelectorAll('.btn-opcao');
    
    // Desabilita todos os botões para impedir cliques múltiplos
    botoes.forEach(b => b.disabled = true);

    if (indiceSelecionado === dadosQuiz.correta) {
        botaoClicado.classList.add('correta');
        elementoFeedback.innerText = dadosQuiz.feedbackSucesso;
        elementoFeedback.style.color = "var(--verde-lima)";
    } else {
        botaoClicado.classList.add('errada');
        elementoFeedback.innerText = dadosQuiz.feedbackErro;
        elementoFeedback.style.color = "var(--amarelo-sol)";
        
        // Mostra a resposta correta para o avaliador de qualquer forma
        botoes[dadosQuiz.correta].classList.add('correta');
    }
}

// Executa a função assim que a página terminar de carregar
window.onload = carregarQuiz;
