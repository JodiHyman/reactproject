import React from 'react';
import ReactDOM from 'react-dom/client'; import "./index.css"
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';
// import Event from "./components/Events/AllEvents"

// import Card from "./components/Movies/MovieCard"
import Card from "./components/Home1"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
			<App /> 
      
		</Provider>
  </React.StrictMode>
);
