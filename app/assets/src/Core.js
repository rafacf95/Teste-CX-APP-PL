const pesquisaCep = (valor) => {
  var cep = valor.replace(/\D/g, '');
  if (cep != '') {
    var validaCep = /^[0-9]{8}$/

    if (validaCep.test(cep)) {
      // var script = document.createElement('script');
      // script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';
      // document.body.appendChild(script);

      fetch('https://viacep.com.br/ws/' + cep + '/json/').then(
        (response) => {
          return response.json()
        }
      ).then(
        (result) => {
          console.log(result)
          return result
        })
    }
  }
};


const Core = {
  pesquisaCep,
};

export default Core;
