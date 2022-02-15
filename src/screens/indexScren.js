import React, { useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
const IndexScreen = ({ navigation }) => {
  const { state, addPost, deletePost, getPost } = useContext(Context);
  //console.log(BlogContext);
  useEffect(() => {
    getPost();
    const listener = navigation.addListener('didFocus', () => {
      getPost();
    });
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <>
      <FlatList
        horizontal={false}
        data={state}
        keyExtractor={(val) => val.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('View', { id: item.id })}
            >
              <View style={styles.postStyle}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 30 }}>{item.content}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deletePost(item.id);
                  }}
                >
                  <FontAwesome5 name='trash-alt' size={25} color='black' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} color='black' />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  postStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    //fontSize: 100,
  },
});
export default withNavigation(IndexScreen);
