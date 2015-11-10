var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('../components/main');
var Home = require('../components/home');
var Profile = require('../components/profile');

var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

module.exports = (
	<Route name="app" path="/" component={Main}>
		<Route name="profile" path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>
);
