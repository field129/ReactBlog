import React, { useReducer } from "react";
// import React, { useState } from "react";

const BlogContext = React.createContext();
// this is object will guide informtation from Parent BlogPostProvider to  BlogList, without having to go through all children

// Refactoring using useReducer instead of useState
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post#${state.length + 1}` }];
    default:
      return state;
  }
};

// ADDING STATE WITHIN CONTEXT
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  // dispatch is function used to modify state
  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  //   const [blogPosts, setBlogPosts] = useState([]);
  // set or setters are used to set the value of a property. A setter gets called each time the value of the property is changed. In other words, it executes a function for each time a property used inside the setter function is changed.

  //   const addBlogPost = () => {
  //     setBlogPosts([
  //       ...blogPosts,
  //       { title: `Blog Post # ${blogPosts.length + 1}` },
  //     ]);
  //   };
  // any time update state variable always call setter, for the new value to use, never modify the originial vale
  // create a new array, inside new array, take all the current blog posts we have and add thme

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

export default BlogContext;

// children

// whenever you have this text the app component will render the custom component
// that text element because it is wrapped inside custom component is going to be passed a prop from app to custom component as a prop called children.

// when we create context object, we get inside that object a Provider, this is what accepts information and is the mec
//  if you want to share a specific piece of information wiht a deeply nested child, you give provider a prop called value

// export const BlogProvider = ({ children }) => {
//     return <BlogContext.Provider value = {5}>{children}</BlogContext.Provider>;

// so in this e.g. i want to share the number 5 from the parent to some child
// you then need to export the Bog context, and decide which component iside the application gets access to that piece of info (value of 5)
