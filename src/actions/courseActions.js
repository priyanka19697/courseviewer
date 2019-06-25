import { getCourses } from '../api/courseApi';

export const addCourse = course => {
	return {
		type: 'ADD_COURSE',
		course: course,
	};
};

export const bringCourses = () => {
	return dispatch => {
		getCourses().then(jsonObj => {
			console.log('from actions', jsonObj);
			return dispatch({
				type: 'GET_COURSES',
				courses: jsonObj,
			});
		});
	};
};
