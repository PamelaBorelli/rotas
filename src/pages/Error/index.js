import { Link } from 'react-router-dom';


function Error() {
    return (
      <div>
        <h1>Ops, parecce que a página que você está acessando não existe!</h1><br/>


        <span>Detectamos as seguintes páginas: </span><br/><br/>
        <Link to="/">Home</Link> <br/>
        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/contato">Contato</Link>

        

      </div>
    );
  }
  
  export default Error;