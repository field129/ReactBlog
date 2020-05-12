import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContextRefactor";
// {} because blog provider was exported as named export- did not use export default symtax, to use gotta put curly braces

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

//  WRAPPING THE NAVIAGTOR
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
// passing App in as child To BlogProvider

// one requirment of app.js file is that you MUST export a react componentt
// in order to wrap everything inside the application, rather than exporting thr createAppContainer, assign to variable
// instead export default custom component-- not doing a lot, simple function that returns app.

// we now have example of moving data around the application and getting that data to update
