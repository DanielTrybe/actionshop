import React, { useContext, useEffect, useState } from 'react';
import ProdContext from '../context_API/ProdContext';
import { Link, useHistory } from 'react-router-dom';

import './prodList.css';
// função de listagem dos produtos recebidos do context
function ProdList() {

  const { resultApi } = useContext(ProdContext);
  return (
    <div className="prodPrincipal">
      <div className="propagandaCima">
        teremos propaganda aqui
      </div>
      <section className="prodSection">
      <aside className="asideEsquerda">
          <p>TERÁ FILTROS AQUI</p>
        </aside>
        <div className="alignUl">
          <ul className="ulProd" id="alignUl">
            {resultApi === [] ? <p>Carregando...</p> : resultApi.map((action, index) => 
            <li key={index}>
              <div className="divImg">
                <img src={action.images[0]} alt={`${action.productName} imagem`} />
              </div>
              <div className="divText">
                <div className="divTitle">{action.productName}</div>
                <div className="divPrice">JP¥ {action.price}</div>
                <div className="buttons">
                  <button>Carrinho</button>
                  <button>Detalhes</button>
                </div>
              </div>
            </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProdList;