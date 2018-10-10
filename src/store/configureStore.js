import { createStore } from 'redux';
import rootReducer from '../reducers';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__();
const initialState = {};
export const configureStore = () => {
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
}