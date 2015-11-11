import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/main';
import Home from '../components/home';
import Profile from '../components/profile';
import {Route, IndexRoute} from 'react-router';

export default (
	<Route name="app" path="/" component={Main}>
		<Route name="profile" path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>
);
