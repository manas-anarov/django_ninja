import React, { Component } from "react";
import axios from 'axios';

import { Card } from 'antd';


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post:""
    };
  }


	componentDidMount()
	{
	  	const postID = this.props.match.params.id;
	    axios.get(`http://127.0.0.1:8000/api/v1/post/${postID}/`)

	    .then(response=>{
	      this.setState({
	        post:response.data,
	      });
	    });

	}
 
	render() {
	    return (

			<div>
				
				<Card title={this.state.post.title}>
					<p>{this.state.post.text}</p>
				</Card>

			</div>

		);
	}


}


export default Detail;