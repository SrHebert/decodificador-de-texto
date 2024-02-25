var btnCriptografar = querySelector('.botao-criptografar');
var btnDescriptografar = querySelector('.botao-descriptografar');
var imagemMeninoComLupa = querySelector('.img-menino-com-lupa');
var paragrafoNadaEncontrado = querySelector('.segunda-caixa-paragrafos');
var textoResutado = querySelector('.resultado');

btnCriptografarTexto.onclick = criptografar;
btnDescriptoTexto.onclick = descriptografar;

let letrasCodificadas = [
    ["e", "enter"],
    ["i", 'imes'],
    ["a","ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function criptografar() {
    ocultarParagrafosCaixa2();
    var caixaDeTexto1 = recuperarTexto()
    resultado.textContent = criptografar(caixaDeTexto1)
}

function descriptografar(){
    ocultarParagrafosCaixa2()
    var caixaDetexto1 = recuperarTexto()
    resultado.textContent = descriptografar(caixaDetexto1);
}

function recuperarTexto(){
    var caixaDeTexto1 = document.querySelector('.caixa-de-texto')
    return caixaDeTexto1.value
}
function ocultarParagrafosCaixa2(){
    imagemMeninoComLupa.classList.add(".ocultar");
    segunda-caixa-paragrafos.classList.add(".ocultar")
}
    const resultado = string
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");

        return resultado;
}

function descriptografar(string){
        const resultado = string
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");

        return resultado;
}

function btnCriptografarTexto(){
    console.log(resultado);
}

function btnDescriptografar(){
    console.log("O botão foi clicado!");
}