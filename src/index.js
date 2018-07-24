import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageContainer from './PageContainer.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageContainer />, document.getElementById('root'));
registerServiceWorker();
