import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header } from 'react-navigation-stack';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../context/BlogContext';
import { Foundation } from '@expo/vector-icons';
import InputScreen from '../components/form';

const ViewScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  //console.log(navigation.getParam('id'));
  const blogPost = state.find((val) => val.id === navigation.getParam('id'));
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
ViewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Foundation name='pencil' size={30} color='black' />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});
export default ViewScreen;
