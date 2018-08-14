import React from 'react';
import { render } from 'react-dom';
import App from '../src';

const props = {};

render(<App {...props} />, document.querySelector('#app'));
