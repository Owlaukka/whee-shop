import React from 'react';
import ReactDom from 'react-dom';

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

ReactDom.render(<h1>Hello world!</h1>, appRoot);
