import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const appRoot = document.createElement('div');
document.body.prepend(appRoot);

ReactDom.render(<App />, appRoot);
