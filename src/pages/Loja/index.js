import { Link } from 'react-router-dom';
function Loja() {
    return (
      <div>
        <h1>Produtos</h1>
            
        <div class="container">
        <img src="https://pngimg.com/uploads/laptop/laptop_PNG5940.png"/>
        <Link to="/produto/notebook">Notebook</Link>
        <img src="https://th.bing.com/th/id/R.7127ab619501eb675ddcdfab7b90a238?rik=fDezr7z99ii5dg&pid=ImgRaw&r=0"/>
        <Link to="/produto/pcgamer">PC Gamer</Link>
        <img src="https://th.bing.com/th/id/R.a2bc9b32ae9ca0005700fd2fd946e8f2?rik=%2fk%2fDuMNy1a8ZjA&pid=ImgRaw&r=0"/>
        <Link to="/produto/tablet">Tablet XPZ-200</Link>
        </div>


      </div>
    );
  }
  
export default Loja;