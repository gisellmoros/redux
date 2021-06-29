import * as CONST from 'utils/constants/actionTypes';

const postsReducer = (state = [], action) => {
	switch (action.type) {
		case CONST.GET_POSTS:
			return action.payload;
		default: 
		return state
	}

}
export default postsReducer;

