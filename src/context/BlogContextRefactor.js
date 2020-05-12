// Automating Context Creation

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post#${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

// reduced significantly compared to before.
// everything have around creating context object and setting up provider is all going to be identical no matter what kind of data we are dealing with.
//  That's why extracted all that stuff to 'helper file' createDataContext.

// now any time want to add in some kind of new resource inside application all you have to do is:
// create new context file
// create reducer
// create different functions that will dispatch and action that will modify the reducer
// call createDataContext, pass in reducer, pass in object with the different actions,  pass in default state
// and it will give back context object and provider which is the react component that makes all of our data available to something else in application.
