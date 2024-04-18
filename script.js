function calcularIMC() {
    // Obter valores de peso e altura
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Classificar o IMC e definir a cor de fundo
    var resultadoContainer = document.getElementById("resultado-container");
    var resultadoIMC = document.getElementById("resultado-imc");
    var resultadoClassificacao = document.getElementById("resultado-classificacao");

    if (isNaN(imc) || imc <= 0) {
        resultadoContainer.style.backgroundColor = "#fff";
        resultadoIMC.innerText = "Por favor, informe valores válidos.";
        resultadoClassificacao.innerText = "";
    } else {
        resultadoContainer.style.backgroundColor = definirCorFundo(imc);
        resultadoIMC.innerText = "Seu IMC é: " + imc.toFixed(2);
        resultadoClassificacao.innerText = "Classificação: " + classificarIMC(imc);
    }
}

function definirCorFundo(imc) {
    if (imc < 18.5) {
        return "#ffcc80"; // Abaixo do peso (laranja claro)
    } else if (imc >= 18.5 && imc < 25) {
        return "#4caf50"; // Normal (verde)
    } else if (imc >= 25 && imc < 30) {
        return "#ffd54f"; // Acima do peso (laranja amarelado)
    } else {
        return "#ff8a80"; // Obeso (vermelho claro)
    }
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else {
        return "Obeso";
    }
}
