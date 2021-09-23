import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import ProdContext from '../context_API/ProdContext';
// css
import './cssComponent.css';

function Header() {
  const { setItemDigitado, funcClickButton } = useContext(ProdContext);
  const [manufacturers, setManufacturers] = useState([]);
  const [series, setSeries] = useState([]);
  const [category, setCategory] = useState([]);
  const handleSearch = (value) => {
    setItemDigitado(value);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/manufacturers`).then((response) => response.json()).then(({ manufacturers }) => {
      let newSet = new Set();
      manufacturers.forEach((item) => newSet.add(item.manufacturer));
      setManufacturers([...newSet]);
    })
    fetch(`http://localhost:3000/series`).then((response) => response.json()).then(({ series }) => {
      let newSet = new Set();
      series.forEach((item) => newSet.add(item.series));
      setSeries([...newSet]);
    })
    fetch(`http://localhost:3000/category`).then((response) => response.json()).then(({ category }) => {
      let newSet = new Set();
      category.forEach((item) => newSet.add(item.category));
      setCategory([...newSet]);
    })
}, []);

    const allShop = () => {
      setItemDigitado('');
      funcClickButton();
    }

  return (
    <header className="headerWidth">
      <section>
        <div className="headerItens">
          <div className="sepIMG">
            <img src={ logo } alt="logo site" />
          </div>
          <div className="busca">
            <input type="text" placeholder="Digite o nome do personagem" name="searchTerm" onChange={ ({ target }) => handleSearch(target.value) }/>
            <button type="button" className="buttonHeader" onClick={ () => funcClickButton() }>Buscar</button>
          </div>
          <div className="links">
            <Link to='/'><p>Contato</p></Link>
            <Link to='/'><p>Login</p></Link>
          </div>
        </div>
      </section>
      <nav>
        <div className="dropdown">
          <div className="projects">
            <button>Home</button>
          </div>
          <div className="projects">
            <button onClick={ () => allShop() }>All Shop</button>
          </div>
          <div className="products">
          <button>Manufacturer</button>
            <ul>
              {!manufacturers ? null : manufacturers.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="products">
          <button>Series</button>
            <ul>
              {!series ? null : series.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="products">
          <button>Category</button>
            <ul>
              {!category ? null : category.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


{/* <ul className='categorias'>
<li>All Shop</li>
<li>Manufacturer
  <ul>
    {!categories ? null : categories.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
</li>
<li>Category</li>
<li>Series</li>
</ul> */}