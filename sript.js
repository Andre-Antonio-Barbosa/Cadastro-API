

// consultar API
// Acessar o site da API 


function viaCEP() {

    let valorCEP = document.querySelector("#inputCEP").value

    /*
    Chamar as informações da API e retonar o status da API
     Ou seja, neste ponto será validado o status
     */
    fetch('https://viacep.com.br/ws/' + valorCEP + '/json/')
        .then(function (respostaAPI) {
            console.log(respostaAPI, respostaAPI)

            /* 
            Pega o retorno da API e converte para Json
           Ou seja, ele traz os atributos e os seus respectivos valores.   
           */
            respostaAPI.json().then(function (retornoEmJson) {
                console.log('retorno em Json', retornoEmJson)


                // Pega o valor deste campo que está vazio, e atribui este objeto, especificando o campo mencionado, netse caso(logradouro)
                document.querySelector('#inputEndereco').value = retornoEmJson.logradouro

            })
        })
}

let campoRequired = ()=>{
    // Pegar todas as tags do tipo input e salvar em uma variável
    let campos = document.querySelectorAll('input').value

    // Percorrer todos os campos salvos na variável
    for (let i = 0; i < campos.length; i++){
        // Valida se os campos estão vazios 
        if (campo[i].value == ''){
            alert('Preencha o campo: ' + campos[i].id)
            // Caso esteja vazia, retorna como 'false', mostrao alerte trava o loop 
            // O id se faz necessário para validar individualmente cada campo
        }
    }
}