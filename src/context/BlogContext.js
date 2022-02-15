import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//ini reducer
const reducer = (blogPost, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;
    case 'add':
      //console.log('called');
      return [
        ...blogPost,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete':
      return blogPost.filter((data) => data.id !== action.payload);

    case 'edit':
      return blogPost.map((a) => {
        if (a.id === action.payload.id) {
          return action.payload;
        } else {
          return a;
        }
      });
      return [
        ...blogPost,
        (blogPost[data].title = action.payload.title),
        (blogPost[data].content = action.payload.content),
      ];
    default:
      return blogPost;
  }
};

//m la hihimuon dd sa context knya function kun panu ig liwat an
//data tas knya reducer

const getPost = (dispatch) => {
  //console.log('called');
  return async () => {
    const response = await jsonServer.get('/blogpost');
    console.log(response.data);
    dispatch({ type: 'get', payload: response.data });
  };
};
const addPost = (dispatch) => {
  return async (title, content, callback) => {
    // dispatch({ type: 'add', payload: { title: title, content: content } });
    // callback();
    await jsonServer.post('/blogpost', {
      title,
      content,
    });
    callback();
  };
};
const deletePost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogpost/${id}`);
    dispatch({ type: 'delete', payload: id });
  };
  // {

  // };
};
const editPost = (dispatch) => {
  return async (title, content, id, callback) => {
    console.log(id);

    await jsonServer.put(`/blogpost/${id}`, {
      title,
      content,
    });
    dispatch({
      type: 'edit',
      payload: { title: title, content: content, id: id },
    });
    callback();
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addPost, deletePost, editPost, getPost },
  []
);
