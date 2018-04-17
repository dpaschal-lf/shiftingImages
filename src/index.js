import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const images = ['alice.jpg','pic1.jpg','donald.png','jiminycricket.jpg','micky.jpg','pinochio.jpg','stitch.jpg','tinkerbell.jpg'];

ReactDOM.render(<App images={images}/>, document.getElementById('root'));
registerServiceWorker();
