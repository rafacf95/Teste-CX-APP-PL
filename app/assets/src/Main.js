import Core from "./Core.js";

const client = ZAFClient.init();
// let settings;

// client.metadata().then((metadata) => {
//   settings = metadata.settings;
// });



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
    const res = Core.pesquisaCep(cep)
    console.log(res)

  })
};


export default Main;
