import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `
  <div id="main-content">
    <form>
      <label>Cep:
        <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"/>
        </label>
        <br />
      <button onClick="" >Pesquisar</button> 
    </form>
  </div>`;

  // Write App
  App.innerHTML = appBody;
};

export default Main;
