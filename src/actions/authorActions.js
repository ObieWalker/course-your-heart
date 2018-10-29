import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';
import toastr from 'toastr';


export const loadAuthorsSuccess = (authors) => {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  }
}

export const addAuthorsSuccess = (author) => {
  return {
    type: types.ADD_AUTHORS_SUCCESS,
    author
  }
}

export const deleteAuthorsSuccess = (authorId) => {
  return {
    type: types.DELETE_AUTHORS_SUCCESS,
    authorId
  }
}

export const loadAuthors = () =>  {
  return dispatch => {
    dispatch(beginAjaxCall())
    authorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    })
    .catch((error) => { throw error; });
  }
}

export const addAuthor = (author) =>  {
  return dispatch => {
    dispatch(beginAjaxCall())
    authorApi.saveAuthor(author)
    .then(author => {
      dispatch(addAuthorsSuccess(author))
    })
    .catch((error) => { throw error; });
  }
}

export const deleteAuthor = (authorId) =>  {
  return dispatch => {
    dispatch(beginAjaxCall())
    authorApi.deleteAuthor(authorId)
    .then(() => {
      dispatch(deleteAuthorsSuccess(authorId))
    })
    .catch((error) => {
      toastr.error(error)
      throw error; });
  }
}