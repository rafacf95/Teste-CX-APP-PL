const pesquisaCep = (valor) => {
  var cep = valor.replace(/\D/g, '');
  if (cep != '') {
    var validaCep = /^[0-9]{8}$/

    if (validaCep.test(cep)) {

      const resultado = fetch('https://viacep.com.br/ws/' + cep + '/json/').then(
        (response) => {
          return response.json()
        }
      )

      return resultado
    }
  }
};


const Core = {
  pesquisaCep,
};

export default Core;
