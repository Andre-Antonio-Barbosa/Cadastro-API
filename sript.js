

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
                document.querySelector('#inputAddress').value = retornoEmJson.logradouro

            })
        })
}
