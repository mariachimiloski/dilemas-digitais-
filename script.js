function verificarResposta(correto) {
    const resultado = document.getElementById("resultado");
    
    if (correto) {
        resultado.innerText = "✅ Muito bem! Isso é um golpe comum. Nunca clique em links suspeitos e nem compartilhe!";
        resultado.style.color = "#28a745";
    } else {
        resultado.innerText = "❌ Cuidado! Bancos e o governo não pedem para compartilhar mensagens para liberar benefícios. Isso é um golpe!";
        resultado.style.color = "#dc3545";
    }
     }