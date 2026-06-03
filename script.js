// Configurações lógicas do Quiz do Agrinho
const respostaCorreta = 1; // Corresponde à segunda opção (tecnologia eficiente)
const feedbackSucesso = "🎉 Excelente escolha! É exatamente nisso que focamos nosso projeto!";
const feedbackErro = "Pense um pouco mais pelo lado da sustentabilidade... Tente outra vez!";

function verificarResposta(indiceSelecionado, botaoClicado) {
    const botoes = document.querySelectorAll('.btn-opcao');
    const elementoFeedback = document.getElementById('mensagem-feedback');
    
    // Bloqueia cliques adicionais após responder
    botoes.forEach(b => b.disabled = true);

    if (indiceSelecionado === respostaCorreta) {
        botaoClicado.classList.add('correta');
        elementoFeedback.innerText = feedbackSucesso;
        elementoFeedback.style.color = "#39FF14"; // Verde Lima
    } else {
        botaoClicado.classList.add('errada');
        elementoFeedback.innerText = feedbackErro;
        elementoFeedback.style.color = "#FFD60A"; // Amarelo Sol
        
        // Destaca visualmente a alternativa que era a correta para o avaliador
        botoes[respostaCorreta].classList.add('correta');
    }
}
