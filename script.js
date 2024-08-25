const textArea = document.querySelector(".text-tarea")
const imagem = document.querySelector(".imagem")

function btncriptografar() {
    const textoEncriptado = criptografar(textArea.value);
    imagem.value = textoEncriptado;
    textArea.value = "";
}


function criptografar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }

    return stringEncriptada;
}


function btndescriptografar() {
    const textoDesencriptado = descriptografar(textArea.value);
    imagem.value = textoDesencriptado;
    textArea.value = "";
}

function descriptografar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDesencriptada;
}

function copiar() {
    const texto = document.querySelector('.imagem').value;  

    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado com sucesso: ' + texto);
        }).catch(function(error) {
            console.error('Falha ao copiar o texto: ', error);
            alert('Erro ao copiar o texto. Tente novamente.');
        });
    } else {
        const textarea = document.querySelector('.imagem');
        textarea.select();
        document.execCommand('copy');
        alert('Texto copiado: ' + texto);
    }
}


