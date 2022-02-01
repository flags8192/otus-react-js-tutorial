import React, { ReducerWithoutAction, StrictMode, useReducer } from 'react';
import ReactDOM from 'react-dom';

import App from '@src/App/index';
import Store from '@src/store';
import { reducer } from '@src/reducer';
import { initialState } from '@src/initialState';
import { IState } from '@src/model';

const Root = () => {
  const [state, dispatch] = useReducer(reducer as ReducerWithoutAction<IState>, initialState);

  return (
    <StrictMode>
      <Store.Provider value={{ dispatch, state }}>
        <App />
      </Store.Provider>
    </StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
