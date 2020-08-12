import React, { Component } from "react";
import axios from 'axios';


import { Form, Input, Button,  message } from 'antd';




const FormItem = Form.Item;







class Delete extends Component {

  constructor(props) {
    super(props);
	    this.state = {
			title:"",
			text:""
		};
	}


	componentDidMount()
	{
	  	const postID = this.props.match.params.id;
	    axios.get(`http://127.0.0.1:8000/api/v1/post/${postID}/`)

	    .then(response=>{
	      this.setState({
	        title:response.data.title,
	        text:response.data.text
	      });
	    });

	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	};





	handleSubmit = (e) => {

	    e.preventDefault();

		const postID = this.props.match.params.id;
	    axios.delete(`http://127.0.0.1:8000/api/v1/post/delete/${postID}/`)
		.then(res => {
			message.success("Text Deleted", 1);

		})
		.catch(err => 
		{
			message.error(err.message, 1);
		})


	};

 
	render() {
	    return (

			<div>
				<form onSubmit={this.handleSubmit}>
					<FormItem label="Title" >
						<Input name="title" placeholder="title" id='title' value={this.state.title} onChange={this.handleChange} required />
					</FormItem>

					<FormItem label="Text" >
						<Input name="text" placeholder="text" id='text' value={this.state.text} onChange={this.handleChange} required />
					</FormItem>
					<Button type="danger" htmlType="submit" >Delete</Button>
				</form>
			</div>


		);
	}


}


export default Delete;