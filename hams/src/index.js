import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from './store'
import './index.css'



render(
<Provider store={store}>
<ConnectedRouter history={history}>
<div><App/>
</div>

</ConnectedRouter>

</Provider>



, document.getElementById('root'));
registerServiceWorker();

