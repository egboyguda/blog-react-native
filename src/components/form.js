import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';

const InputScreen = ({ title, multi, value, onChange }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        style={styles.border}
        multiline={multi}
        value={value}
        onChangeText={(val) => {
          onChange(val);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    color: 'black',
  },
});
export default InputScreen;
