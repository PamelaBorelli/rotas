import { useParams } from 'react-router-dom';

function Produto() {
  
  const {id} = useParams();

  if ( id === 'notebook'){
    return (
      <div>

        <h2>Notebook Samsung Última Geração</h2>
        <h3>R$ 3.500,00</h3>
        <h3>À vista no PIX ou boleto</h3>
        <img src="https://pngimg.com/uploads/laptop/laptop_PNG5940.png"/>

      </div>
    );
  }
  

  if ( id === 'pcgamer'){
    return (
      <div>

        <h2>PC Gamer</h2>
        <h3>R$ 6.500,00</h3>
        <h3>À vista no PIX ou boleto</h3>
        <img src="https://th.bing.com/th/id/R.7127ab619501eb675ddcdfab7b90a238?rik=fDezr7z99ii5dg&pid=ImgRaw&r=0"/>

      </div>
    );
  }

  if ( id === 'tablet'){
    return (
      <div>

        <h2>Tablet XPZ-200</h2>
        <h3>R$ 2.500,00</h3>
        <h3>À vista no PIX ou boleto</h3>
        <img src="https://th.bing.com/th/id/R.a2bc9b32ae9ca0005700fd2fd946e8f2?rik=%2fk%2fDuMNy1a8ZjA&pid=ImgRaw&r=0"/>

      </div>
    );
  }
  
}
  
  export default Produto;
  