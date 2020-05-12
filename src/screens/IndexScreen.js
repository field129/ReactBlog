import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

// in order to use context you have to import useContext hook from React

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  //   const value = useContext(BlogContext);
  //  value is now equal to the value prop we assigned to BlogContextProvider on BlogContextScreen

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
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
