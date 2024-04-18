console.log("calcular...")

// manipulação do DOM

// let = local
// var = global
// const = constante



document.querySelector("#Nível").addEventListener("change", function() {
    const nivel = document.querySelector("#Nível").value;
    document.querySelector("#Lvl").innerText = nivel;
    calcular(); // Chama a função calcular para atualizar o orçamento, se necessário
});
