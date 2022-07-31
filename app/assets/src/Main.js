import Core from "./Core.js";

const client = ZAFClient.init();

const data = await client.get(['ticket.id', 'ticket.requester.id'])

const Main = async () => {

  const App = document.getElementById("app");
  let appBody = `
  <div id="main-content">
    <form id="form">
      <label>Cep:
        <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"/>
        </label>
        <br />
      <button type="submit">Pesquisar</button> 
      <br />
      <span id="erro"></span>
    </form>
  </div>
  <div>
  <h2>Tickets deste cliente:</h2>
  <span id="lastTickets"></span>
  </div>
  `;

  // Write App
  App.innerHTML = appBody;
  
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const cep = await document.getElementById('cep').value
    const res = await Core.pesquisaCep(cep)

    if(res){
      const dadosCep = await Core.criaComentario(res)
      client.request({
        url: `/api/v2/tickets/${data['ticket.id']}`,
        type: 'PUT',
        data: {
          ticket: {
            comment: {
              body: dadosCep
            }
          }
        }
      })

    }

  })
};

export default Main;
