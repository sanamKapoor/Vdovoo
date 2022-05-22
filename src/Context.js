import React, { useReducer } from 'react';
import Reducer from './reducer';

const initialState = {
  video: {},
  error: '',
  loading: true,
  category: ['web3', 'web development', 'machine learning', 'nft', 'gaming'],
  searchResult: [],
  hide: false,
};

export const MyContext = React.createContext(initialState);

function Context(props) {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <MyContext.Provider value={{ data: state, dispatch }}>
      {
        props.children
      }
    </MyContext.Provider>
  )
}

export default Context
