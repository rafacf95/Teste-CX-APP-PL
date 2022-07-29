const pesquisaCep = async (value) => {
  var cep = value.replace(/\D/g, '');
  if (cep != '') {
    var validaCep = /^[0-9]{8}$/

    if (validaCep.test(cep)) {

      // const resultado = fetch('https://viacep.com.br/ws/' + cep + '/json/').then(
      //   (response) => {
      //     return response.json()
      //   }
      // )

      const resultado = await (await fetch('https://viacep.com.br/ws/' + cep + '/json/')).json()

      if (resultado.erro) {
        document.getElementById('erro').innerHTML = "CEP não encontrado."
        return undefined
      }
      document.getElementById('erro').innerHTML = ""
      return resultado
    }

    document.getElementById('erro').innerHTML = "CEP inválido."
    return undefined
  }
};

const criaComentario = async (value) => {
  const dadosCep = `
  Dados referente ao CEP ${value.cep}:
  Estado: ${value.uf}
  Cidade: ${value.localidade}
  Bairro: ${value.bairro}
  Logradouro: ${value.logradouro}
  `

  return dadosCep
}


const Core = {
  pesquisaCep,
  criaComentario
};

export default Core;
