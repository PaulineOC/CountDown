import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';


const render = () => ReactDOM.render(<App />, document.getElementById('root'))
//store.subscribe(render);
render();


registerServiceWorker();




//import storeFactory from './store'

// const store = storeFactory()

// window.React = React
// window.store = store

// const render = () =>
//     ReactDOM.render(
//         <App store={store}/>,
//         document.getElementById('react-container')
//     )

// store.subscribe(render)
// render()