import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'
import ProdContext from '../context_API/ProdContext';
// css
import './css/cssComponent.css';

function Header() {
  const { setItemDigitado, funcClickButton } = useContext(ProdContext); // item digitado pelo usuário e função de buscar o item
  const [manufacturers, setManufacturers] = useState([]); // categoria
  const [series, setSeries] = useState([]); // categoria
  const [category, setCategory] = useState([]); // categoria
  const location = useLocation();
  const history = useHistory();
// função de adicionar a digitação ao estado
  const handleSearch = (value) => {
    setItemDigitado(value);
  }

// useEffect para trazer categorias
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((response) => response.json())
      .then(({ categoriesList: { manufacturers, series, category }}) => {
      let setManu = new Set();
      let setSeri = new Set();
      let setCateg = new Set();
      manufacturers.forEach((item) => setManu.add(item.manufacturer));
      setManufacturers([...setManu]);
      series.forEach((item) => setSeri.add(item.series));
      setSeries([...setSeri]);
      category.forEach((item) => setCateg.add(item.category));
      setCategory([...setCateg]);
    })
}, []);

// função para buscar trazer toda a lista de itens
    const allShop = () => {
      setItemDigitado('');
      funcClickButton();
    }

    const listItens = ({name}) => {
      console.log(name)
      if (location.pathname !== '/') {
        history.push('/')
      }
      allShop();
    }

  return (
    <header className="headerWidth">
      <section>
        <div className="headerItens">
          <div className="sepIMG">
            <img src={ logo } alt="logo site" />
          </div>
          <div className="busca">
            <input type="text" placeholder="Digite o nome do personagem ou série" name="searchTerm" onChange={ ({ target }) => handleSearch(target.value) }/>
            <button type="button" className="buttonHeader" onClick={ () => funcClickButton() }>Buscar</button>
          </div>
          <div className="links">
            <Link to='/'><p>Login</p></Link>
            <Link to='/'><p>Sign Up</p></Link>
          </div>
        </div>
      </section>
      <nav>
        <div className="dropdown">
          <div className="projects redondo1">
            <button>Home</button>
          </div>
          <div className="projects">
            <button name='allShop' onClick={ ({target}) => listItens(target) }>All Shop</button>
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
          <div className="products redondo2">
          <button>Contato</button>
          </div>
          <div className="cart">
            <button>Carrinho</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// arrumar detalhes 