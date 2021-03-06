import {
  ADD_BLOGPOST,
  SET_CURRENT_USER,
  SET_GUEST_USER,
  ADD_USER,
  UPDATE_USER,
  LIKE_BLOGPOST,
  DELETE_BLOGPOST
} from '../constants';
import initBlogPosts from '../../js_modules/initBlogPosts';

let blogPostId = initBlogPosts.length;

export const addBlogPost = (text, authorNickname) => ({
  type: ADD_BLOGPOST,
  id: blogPostId++,
  authorNickname,
  likes: [],
  text
})

export const likeBlogPost = (postId, userNickname) => ({
  type: LIKE_BLOGPOST,
  postId,
  userNickname
})

export const deleteBlogPost = (postId) => ({
  type: DELETE_BLOGPOST,
  postId
})

export const setCurrentUser = nickname => ({
  type: SET_CURRENT_USER,
  nickname
})

export const setGuestUser = () => ({
  type: SET_GUEST_USER
})

export const addUser = user => ({
  type: ADD_USER,
  nickname: user.nickname,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture
})

export const updateUser = user => ({
  type: UPDATE_USER,
  nickname: user.nickname,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  posts: user.posts
})