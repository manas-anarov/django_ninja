import React, { Component } from "react";
import axios from 'axios';


import { Form, Input, Button, message} from 'antd';



const FormItem = Form.Item;






class Add extends Component {

  constructor(props) {
    super(props);
	    this.state = {
			title:"",
			text:""
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	};



	handleSubmit = (e) => {

	    e.preventDefault();

	    let form_data = new FormData();


	    form_data.append('title', this.state.title);
	    form_data.append('text', this.state.text);


		axios.post(`http://127.0.0.1:8000/api/v1/post/add/`, form_data)
		.then(res => {
			message.success("Text saved", 1);

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
					<Button type="primary" htmlType="submit" >Save</Button>
				</form>
			</div>


		);
	}


}


export default Add;