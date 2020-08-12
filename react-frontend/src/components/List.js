import React, { Component } from "react";
import axios from 'axios';

import { List } from 'antd';

import { Link } from 'react-router-dom';



class ListPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }


  componentDidMount()
  {
    axios.get("http://127.0.0.1:8000/api/v1/post/list/")
    .then(response=>{
      this.setState({
        posts:response.data,
      });
    });

  }
 

	render() {
	    return (

			<div>
				<List
			      dataSource={this.state.posts}
			      renderItem={item => (
			        <List.Item>
			        <Link to={`post/${item.id}/`}>{item.title}</Link>
			        -------
			        <Link to={`edit/${item.id}/`}>edit</Link>
			        -------
			        <Link to={`delete/${item.id}/`}>delete</Link>
			        </List.Item>
			      )}
			    />

			</div>


		);
	}


}


export default ListPost;