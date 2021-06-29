import * as CONST from 'utils/constants/actionTypes';
import axios from 'axios'

export const getPosts = () => async dispatch => {
	try{
		const {data} = await axios.get(
			'https://jsonplaceholder.typicode.com/posts');
		dispatch({type: CONST.GET_POSTS, payload: data})

	} catch(err) {
		console.log(err)
	}

}