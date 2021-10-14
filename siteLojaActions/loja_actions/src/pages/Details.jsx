import React, { useContext, useEffect, useState } from 'react';
import ProdContext from '../context_API/ProdContext';
import { Link, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import './css/detail.css';

function ProductDetails(props) {
  const { id } = props.match.params
  const [oneItem, setOneItem] = useState('');
  const [oneImage, setOneImage] = useState('');
  console.log(oneImage)
  useEffect(() => {
    fetch(`http://localhost:3000/actions/${id}`).then((response) => response.json()).then(({Action}) => {
      setOneItem(Action)
      setOneImage(Action.images[0])
    })
  }, [])
  return (
    <>
    <Header />
    <div className="sectionProduct">
      <div className="divPhotos">
        <div className="imgLimitPrincipal">
          <img src={oneImage} alt="first pic of item" />
        </div>
        <ul className="ulPhotos">
          {!oneItem ? <p>carregando...</p> : oneItem.images.map((item, index) => 
          <li key={index}><img src={item} alt="pic from action"  onClick={ () => setOneImage(item)}></img></li>
          )}
        </ul>
      </div>
      <div className="buySection">
        <div className="buySectionNamePrice">
          <h1>{oneItem.productName}</h1>
          <p>JP¥ {oneItem.price}</p>
        </div>
        <div className="specifications">
          {oneItem.specifications}
        </div>
        <div className="details">
          {oneItem.details}
        </div>
        <div className="detailButton">
          <button>Carrinho</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails;

