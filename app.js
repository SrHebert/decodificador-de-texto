var btnCriptografar = querySelector('.botao-criptografar');
var btnDescriptografar = querySelector('.botao-descriptografar');
var imagemMeninoComLupa = querySelector('.menino-com-lupa');
var conteudoParagrafos = querySelector('.caixa-paragrafos');
var textoResutado = querySelector('.resultado');

btnCriptografarTexto.onclick = criptografar;
btnDescriptoTexto.onclick = descriptografar;

function criptografar() {
    ocultarParagrafosCaixa2();
    var caixaDeTexto = recuperarTexto()
    resultado.textContent = criptografarTexto(caixaDeTexto)
}

function descriptografar(){
    ocultarParagrafosCaixa2()
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

    for(var i = 0; 0< texto.leng; i++){
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

function copiar(){
    let copiarTexto = document.getElementsByClassName(".caixa-de-texto");

    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado.");
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener ("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Olá");    
    })