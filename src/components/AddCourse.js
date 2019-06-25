import React, { Component } from 'react';

class AddCourse extends Component {
	state = {
		courseName: null,
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value, //course:"hello"
		});
		console.log(e.target.id, e.target.value);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addCourse(this.state.courseName);
		this.setState({
			courseName: '',
		});
		console.log(this.state);
	};

	render() {
		return {
			/* <div className="container">
				<form onSubmit={this.handleSubmit}>
					<label />
					<div className="form-group ">
						<h3 className="center ">Add Courses</h3>
						<input type="text" id="courseName" value={this.state.courseName} onChange={this.handleChange} />
						<button>Save</button>
					</div>
				</form>
			</div>  */
		};
	}
}

export default AddCourse;
