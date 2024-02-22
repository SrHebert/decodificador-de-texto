var entradaTexto = document.getElementsByClassName("caixa-de-texto")
var textoCoDecodificado = document.getElementsByClassName("mensagem-co-decodificada")

let letrasCodficadas = {
    ["e", "enter"]
    ["i", 'imes']
    ["a","ai"]
    ["o", "ober"]
    ["u", "ufat"]
};

let caixaTexto = document.querySelector('caixa-de-texto');
caixaTexto.getAttribute("textarea");
caixaTexto.innerHTML = 'Digite seu texto aqui...';
