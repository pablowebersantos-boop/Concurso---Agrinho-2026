// VARIÁVEL PARA CONTROLAR O TAMANHO DA FONTE
let tamanhoAtual = 100; // Significa 100%

function mudarFonte(modificador) {
    tamanhoAtual += modificador * 10; // Aumenta ou diminui de 10 em 10%
    
    // Define limites para não ficar grande ou pequeno demais
    if (tamanhoAtual < 80) tamanhoAtual = 80;
    if (tamanhoAtual > 150) tamanhoAtual = 150;
    
    // Aplica o novo tamanho no site inteiro
    document.body.style.fontSize = tamanhoAtual + "%";
}

// VARIÁVEL PARA CONTROLAR O IDIOMA
let idiomaAtual = "PT";

function mudarIdioma() {
    const btn = document.getElementById("btn-idioma");
    
    if (idiomaAtual === "PT") {
        idiomaAtual = "EN";
        btn.innerText = "EN / PT";
        
        // Traduz os textos para Inglês
        document.getElementById("titulo-principal").innerText = "The Sustainable Future";
        document.getElementById("titulo-noticias").innerText = "Field News";
        
        document.querySelector(".txt-n1-titulo").innerText = "Agro Innovations in 2026";
        document.querySelector(".txt-n1-desc").innerText = "Discover how new drones and smart sensors are helping to save water and pesticides in plantations.";
        
        document.querySelector(".txt-n2-titulo").innerText = "The Power of Crop Rotation";
        document.querySelector(".txt-n2-desc").innerText = "Understand how alternating plants in the field naturally improves soil nutrients and prevents wear.";
        
        document.querySelector(".txt-n3-titulo").innerText = "Sustainable Management Practices";
        document.querySelector(".txt-n3-desc").innerText = "Small and large farmers share their techniques for producing food while protecting local water sources.";
        
    } else {
        idiomaAtual = "PT";
        btn.innerText = "PT / EN";
        
        // Volta os textos para Português
        document.getElementById("titulo-principal").innerText = "O Futuro Sustentável";
        document.getElementById("titulo-noticias").innerText = "Notícias do Campo";
        
        document.querySelector(".txt-n1-titulo").innerText = "Inovações no Agro em 2026";
        document.querySelector(".txt-n1-desc").innerText = "Descubra como os novos drones e sensores inteligentes estão ajudando a economizar água e defensivos agrícolas nas plantações.";
        
        document.querySelector(".txt-n2-titulo").innerText = "O Poder da Rotação de Culturas";
        document.querySelector(".txt-n2-desc").innerText = "Entenda como alternar as plantas no campo melhora os nutrientes do solo de forma natural e evita o desgaste da terra.";
        
        document.querySelector(".txt-n3-titulo").innerText = "Práticas de Manejo Sustentável";
        document.querySelector(".txt-n3-desc").innerText = "Pequenos e grandes produtores rurais compartilham suas técnicas para produzir alimentos protegendo as fontes de água locais.";
    }
}
