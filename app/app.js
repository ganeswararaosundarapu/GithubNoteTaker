import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {Router} from 'react-router';


// before v 0.14.1
// Router.rout(routes, function(Root){
// 	ReactDOM.render(<Root />, document.getElementById('app'));
// });

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
