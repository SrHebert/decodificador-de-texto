var btnCriptografar = querySelector('.botao-criptografar');
var btnDescriptografar = querySelector('.botao-descriptografar');
var imagemMeninoComLupa = querySelector('.img-menino-com-lupa');
var paragrafoNadaEncontrado = querySelector('.segunda-caixa-paragrafos');
var textoResutado = querySelector('.resultado');

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

let letrasCodificadas = [
    ["e", "enter"],
    ["i", 'imes'],
    ["a","ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function criptografar(string) {
    caixaDeTexto2 = resultado;
    caixaDeTexto1 = string
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

let test = "texto de teste";
let testDescriptografado = "tenterxtober denter tenterstenter"

console.log(criptografar(test));
console.log(descriptografar(testDescriptografado));