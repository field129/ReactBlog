import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContextRefactor";

// in order to use context you have to import useContext hook from React

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  //   const value = useContext(BlogContext);
  //  value is now equal to the value prop we assigned to BlogContextProvider on BlogContextScreen

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          // item === individual blogPost objects
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
