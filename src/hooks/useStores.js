import React from 'react';
import context from '../stores/context';

const useStores = () => React.useContext(context);

export default useStores;