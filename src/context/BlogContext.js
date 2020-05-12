import React from "react";

const BlogContext = React.createContext();
// this is object will guide informtation from PAren BlogPostProvider to  BlogList, without having to go through all children

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};

//    const app=() => {
//     return <CustomComponent>
//         <text>Hi there</text>
//         </CustomComponent>
//    }
// wheneever you have this text the app component will render the custom component
// that text element becaue it is wrapped inside custom compoennt is going to be passed a a prop from app to custom compinent as a prop called children.
