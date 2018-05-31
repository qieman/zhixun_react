/**
 * Created by zfd on 2018/5/30.
 */
import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import  showItem  from './components/showItem';
import showList  from './components/showList';

const routers = ()=>
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={showItem} />
			<Route exact path="/:item" component={showList} />
		</Switch>
	</BrowserRouter>;

export  default  routers