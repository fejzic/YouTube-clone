import React, { useEffect } from 'react';
import useStores from '../hooks/useStores';

const Root = ({ children }) => {
  const { userStore } = useStores();
  


  useEffect(() => {
    userStore.isLoggedIn && userStore.loadMe();
  }, []);

  return (<>{ children }</>);
};

export default Root;
