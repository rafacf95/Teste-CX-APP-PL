const pesquisaCep = (value) => {
  var cep = value.replace(/\D/g, '');
  if (cep != '') {
    var validaCep = /^[0-9]{8}$/

    if (validaCep.test(cep)) {

      const resultado = fetch('https://viacep.com.br/ws/' + cep + '/json/').then(
        (response) => {
          return response.json()
        }
      )
      if(resultado.erro){
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


const Core = {
  pesquisaCep,
};

export default Core;
