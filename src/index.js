import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
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