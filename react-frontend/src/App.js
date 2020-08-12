import React, { Component } from 'react';


import 'antd/dist/antd.css';

import { Route, BrowserRouter } from 'react-router-dom'
import CustomLayout from './components/Layout';

import ListPost from './components/List'
import Detail from './components/Detail'
import Add from './components/Add'
import Edit from './components/Edit'
import Delete from './components/Delete'


class App extends Component {

	render() {
		return (
			<BrowserRouter>
			<div className="App">
				<CustomLayout {...this.props}>
				<Route exact path='/' component={ListPost}/>
				<Route path='/add' component={Add} />
				<Route path='/post/:id' component={Detail} />
				<Route path='/edit/:id' component={Edit} />
				<Route path='/delete/:id' component={Delete} />
				</CustomLayout>
				
			</div>
		</BrowserRouter>


		);
	}
}




export default App;

