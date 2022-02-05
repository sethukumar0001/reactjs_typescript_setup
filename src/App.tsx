import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'src/assets/scss/common/base.scss';
import "react-datepicker/dist/react-datepicker.css";

// import './scss/App.scss';

const App = () => {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />   
      </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
