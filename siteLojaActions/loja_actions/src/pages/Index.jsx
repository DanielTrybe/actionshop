import React, { useContext, useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// component
import Header from '../components/Header';
import ProdList from '../components/ProdList';

function Index() {

  return (
    <>
      <Header />
      <ProdList />
    </>
  );
}

export default Index;