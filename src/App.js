import React from 'react';
import Header from './components/Header';
import Items from './components/Items';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
//Redux
//El provider es de donde fluyen los datos utilizando el store
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';


import {persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

function App() {

  return (
    <Router>
      {/* Se define el provider y el store lo requiere como propiedad del componente
      al provider rodear todo, todos los datos, todo lo que registremos, todas las funciones
      que agreguemos van a estar disponibles en todo el proeycto
      */}
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <Header />
          <div className='container mt-5'>
            <Switch>
              <Route exact path='/' component={Items} />
              <Route exact path='/items' component={Items} />
            </Switch>
          </div>
          </PersistGate >
      </Provider>
    </Router>
  );
}

export default App;
