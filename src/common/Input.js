import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { ApplicationStyle, Colors } from '../Themes';

const classStyle = {
  title: {
    fontSize: 16,
    paddingBottom: 10,
    color: Colors.textGrey,
  },
  input: {
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
};
export default function Input({
  title,
  value,
  onChangeText,
  style,
  isValid = true,
}) {
  return (
    <View style={[{ paddingVertical: 10 }, style]}>
      <Text style={classStyle.title}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={
          isValid
            ? classStyle.input
            : [classStyle.input, { borderBottomColor: 'red' }]
        }
      />
    </View>
  );
}
