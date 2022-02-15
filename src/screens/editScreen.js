import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useContext, useState } from 'react/cjs/react.development';
import InputScreen from '../components/form';
import { Context } from '../context/BlogContext';
const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context);
  //itun na val mga sulud tun sa state
  const blogPost = state.find((val) => val.id === navigation.getParam('id'));
  console.log(blogPost);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <InputScreen
        title={'Title'}
        value={title}
        onChange={(val) => setTitle(val)}
      />
      <InputScreen
        title={'Content'}
        value={content}
        onChange={(val) => {
          setContent(val);
        }}
      />
      <Button
        title={'save'}
        onPress={() => {
          editPost(title, content, blogPost.id, () => {
            navigation.pop();
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default EditScreen;
