const pesquisaCep = (valor) => {
  var cep = valor.replace(/\D/g, '');
  if (cep != '') {
    var validaCep = /^[0-9]{8}$/

    if (validaCep.test(cep)) {

      const resultado = await(
        await fetch('https://viacep.com.br/ws/' + cep + '/json/')
      )

      return resultado

      // fetch('https://viacep.com.br/ws/' + cep + '/json/').then(
      //   (response) => {
      //     return response.json()
      //   }
      // ).then(
      //   (result) => {
      //     console.log(result)
      //     return result
      //   })
    }
  }
};


const Core = {
  pesquisaCep,
};

export default Core;
