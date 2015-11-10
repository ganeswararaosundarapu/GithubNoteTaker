var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
 var routes = require('./config/routes');

// Router.rout(routes, function(Root){
// 	ReactDOM.render(<Root />, document.getElementById('app'));
// });

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));

// var Main = require('./components/main');

// ReactDOM.render(<Main />, document.getElementById('app'));
