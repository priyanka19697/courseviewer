import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bringAuthors } from '../actions/authorActions';
import { addCourse, bringCourses } from '../actions/courseActions';

class AddCourses extends Component {
	state = {
		title: null,
		author: null,
		category: null,
	};

	componentWillMount() {
		this.props.bringAuthors();
		this.props.bringCourses();
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(e.target.id, e.target.value);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addCourse(this.state);
	};

	render() {
		var select = document.getElementById('authors');
		var authorsList;
		console.log(this.props, 'from save render');
		if (this.props.authors) {
			if (this.props.authors.length > 0) {
				authorsList = this.props.authors.map(author => {
					return <option>{author.name}</option>;
				});
			}
		} else console.log('loading');

		return (
			<div className="container">
				<div className="form-group">
					<label htmlFor="Add course">
						<h3>Add Course</h3>
					</label>
				</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">
							<h4>Title</h4>
						</label>
						<input type="text" className="form-control" id="title" onChange={this.handleChange} />
						<label htmlFor="author">
							<h4>Author</h4>
						</label>
						<select id="author" className="form-control" onChange={this.handleChange}>
							<option selected>Select Author</option>
							{authorsList}
						</select>
						<label htmlFor="category">
							<h4>Category</h4>
						</label>
						<input type="text" id="category" className="form-control" onChange={this.handleChange} />
						<button className="m-3 btn btn-primary">Save</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('mstpAddcourses', state);
	return {
		courses: state.courses,
		authors: state.authors,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		//key :arrow  function that will call dispatch function from actions

		bringAuthors: () => {
			dispatch(bringAuthors());
		},

		addCourse: course => {
			//dispatch(action) sent to reducer
			//dispatch({
			//	type:"ADD_COURSE",
			//	id: 1
			//})
			dispatch(addCourse(course));
		},

		bringCourses: () => {
			dispatch(bringCourses());
		},
	};
};

export default connect(
	mapStateToProps, //state
	mapDispatchToProps //dispatch
)(AddCourses);
