import React, { useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { useContext, useEffect } from 'react/cjs/react.development';
import InputScreen from '../components/form';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(Context);
  return (
    <View>
      <InputScreen
        title={'Enter Title:'}
        multi={false}
        value={title}
        onChange={(val) => {
          setTitle(val);
        }}
      />
      <InputScreen
        title={'Enter Content:'}
        multi={true}
        value={content}
        onChange={(val) => setContent(val)}
      />
      <Button
        title={'save'}
        onPress={() => {
          addPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default CreateScreen;
