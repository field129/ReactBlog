// lower case file name- convention when exporting plain function

// reusable function that can be reused to automate process of setting up Context stuff and Provider
// reuse function to add in new types of resources to app very easily

import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  //   if you want to add something else just change 'Context' to whatever makes sense

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === {addBlogPost: (dispatch) => {return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      //    key==='addBlogPost'
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
