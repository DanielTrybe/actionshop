import React, { useContext, useEffect, useState } from 'react';
import ProdContext from '../context_API/ProdContext';
import { Link, useHistory } from 'react-router-dom';

import './prodList.css';

function ProdList() {

  const { resultApi } = useContext(ProdContext);
  return (
    <section className="prodSection">
      <aside className="asideEsquerda">
        <p>TERÁ FILTROS AQUI</p>
      </aside>
      <ul className="ulProd">
        {resultApi === [] ? <p>Carregando...</p> : resultApi.map((action, index) => 
        <li key={index}>
          <div className="divImg">
            <img src={action.images[0]} alt={`${action.productName} imagem`} />
          </div>
          <div className="divText">
            <div>{action.productName}</div>
            <div>JP¥ {action.price}</div>
            <div className="buttons">
              <button>Carrinho</button>
              <button>Detalhes</button>
            </div>
          </div>
        </li>
        )}
      </ul>
      <aside className="asideDireita">
        <p>terá uma propaganda aqui</p>
      </aside>
    </section>
  );
}

export default ProdList;