import './App.css';
import React, { Component } from 'react';
import  {BrowserRouter} from 'react-router-dom';
import Main from './component/mainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from'./redux/configureStore';

const store=ConfigureStore();

class App extends Component {

render(){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <di>
          <Main />
        </di>
      </BrowserRouter>
    </Provider>
  )
}


}


export default App;
