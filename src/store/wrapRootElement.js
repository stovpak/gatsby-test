import React from 'react';
import { Provider } from 'react-redux';
import {
  oneOfType, node, arrayOf, string,
} from 'prop-types';
import {
  createStore as reduxCreateStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk));

export const wrapRootElement = ({ element }) => (
  <Provider store={createStore()}>
    {element}
  </Provider>
);

export default wrapRootElement;

wrapRootElement.propTypes = {
  element: oneOfType([string, node, arrayOf(node)]).isRequired,
};
