import React, { useState, useEffect } from 'react';
import ProdContext from '../context_API/ProdContext';
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
// http://localhost:3000/actions
function ProdProvider({children}) {
  // retornos api
  const [resultApi, setResultApi] = useState([]);
  // termo buscado
  const [itemDigitado, setItemDigitado] = useState('');

  const funcClickButton = () => {
    fetch(`http://localhost:3000/actions/?search=${itemDigitado}`).then((response) => response.json()).then(({ allActions }) => setResultApi(allActions));
  }

  const values = {
    itemDigitado, 
    setItemDigitado,
    resultApi,
    setResultApi,
    funcClickButton,
  };
  return (
    <ProdContext.Provider value={ values }>
      {children}
    </ProdContext.Provider>
  );
}

export default ProdProvider;