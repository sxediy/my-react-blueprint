import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(rootreducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    username: store.getState().auth.username
  });
});

sagaMiddleware.run(sagas);

export default store;
