import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
// defaults to localStorage for web
import storage from 'redux-persist/lib/storage' 

import {persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk),
        typeof window  === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f      
    )
);

const persistor = persistStore(store);
export  {store,persistor};
  