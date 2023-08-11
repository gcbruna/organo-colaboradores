import { useState } from 'react';
import Formulario from './componetes/Formulario';
import Banner from './componetes/banner/banner';
import Time from './componetes/Time';



function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="FrontEnd"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
    </div>
  );
}

export default App;
