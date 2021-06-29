import React, {useEffect} from 'react'
import { getPosts } from 'redux/actions/posts'
import { useDispatch, useSelector } from 'react-redux';


const Posts = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts)
	console.log(posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return (

		<div>Posts</div>

		)
}


export default Posts;