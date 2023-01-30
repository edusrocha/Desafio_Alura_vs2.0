
const popup= document.querySelector(".popup-wrapper");

setTimeout(function(){
    popup.style.display= "none";
}, 3000)
// Preparação para alterar a Imagem pelo resultado
const areaImagem= document.querySelector(".aguardandoTexto");
const areaResultado= document.querySelector(".mensagemTransformada");
function esconderImagem(){
    areaImagem.style.display= "none";
    areaResultado.style.display= "flex";
}

const textArea= document.querySelector("#inputTexto");
const mensagem= document.querySelector("#outputTexto");
let btnCopiar= document.querySelector (".btnsParaCopiar")



// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Criptografar
function btnCriptografa() {
    const textoCritografa = encriptar (textArea.value);
    mensagem.value= textoCritografa;
    textArea.value= "";
    esconderImagem();
 }

function encriptar(mensagemCriptografa){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensagemCriptografa = mensagemCriptografa.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if (mensagemCriptografa.includes (matrizCodigo[i][0])){
            mensagemCriptografa= mensagemCriptografa.replaceAll(matrizCodigo [i][0], matrizCodigo [i][1]);      
        }
    }
    return mensagemCriptografa;

}

//Descriptografar
function btnDescriptografa() {
    const textoDescCritografa = desencriptar (textArea.value);
    mensagem.value= textoDescCritografa;
    textArea.value= "";
 }

function desencriptar(mensagemDescriptografa){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensagemDescriptografa = mensagemDescriptografa.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if (mensagemDescriptografa.includes (matrizCodigo[i][1])){
            mensagemDescriptografa= mensagemDescriptografa.replaceAll(matrizCodigo [i][1], matrizCodigo [i][0]);      
        }
    }
    return mensagemDescriptografa;

}
//Voltando a condição inicial
function mostrarImagem(){
    areaImagem.style.display= "flex";
    areaResultado.style.display= "none";
}
// Copiar texto
function copiaTexto() {
    let copiar= (mensagem.value);
    navigator.clipboard.writeText (copiar);
    console.log (copiar.value);
    alert("Agora voce pode colar onde desejar");
    mostrarImagem();
}
// Transferir o texto para recriptografar
function tranfereTexto(){
    let textoCopiado= (mensagem.value);
    textArea.value= textoCopiado;
    mensagem.value= "";
    mostrarImagem();
}
