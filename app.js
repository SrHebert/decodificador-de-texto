var btnCriptografar = document.querySelector(".botao-criptografar");
var btnDescriptografar = document.querySelector(".botao-descriptografar");
var imagemMeninoComLupa = document.querySelector(".menino-com-lupa");
var conteudoParagrafos = document.querySelector(".caixa-paragrafos");
var textoResutado = document.querySelector("#texto-resultado");

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultarParagrafos();
    var caixaDeTexto = recuperarTexto()
    textoResutado.textContent = criptografarTexto(caixaDeTexto)
}

function descriptografar(){
    ocultarParagrafos()
    var caixaDetexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(caixaDetexto);
}

function recuperarTexto(){
    var caixaDeTexto = document.querySelector('.caixa-de-texto')
    return caixaDeTexto.value
}
function ocultarParagrafos(){
    imagemMeninoComLupa.classList.add(".ocultar");
    conteudoParagrafos.classList.add(".ocultar")
}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; 0 < texto.leng; i++){
        if(texto[i]== "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i]== "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i]== "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i]== "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i]== "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal = texto[i]
        }
        
    }
    return textoFinal
}
    
    function botaoCopiar(){
        document.getElementsById("#botaoCopiar").addEventListener('click', botaoCopiar);
        document.querySelector('#texto-resultado').select();
        document.execCommand("copiar");
    }

//const btnCopiar = document.querySelector(".btn-copiar");
   // btnCopiar.addEventListener ("click", copiar = () => {
   // var conteudo = document.querySelector(".texto-resultado").textContent;
    //navigator.clipboard.writeText(conteudo);
   // console.log("Olá");    
    //})