import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { ApplicationStyle, Colors } from '../Themes';

const { fontSize, padding } = ApplicationStyle;

const classStyle = {
  title: {
    fontSize: fontSize.xMedium,
    paddingBottom: padding.sm,
    color: Colors.textGrey,
  },
  input: {
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
    fontSize: fontSize.xMedium,
    paddingVertical: padding.xSmall,
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
    <View style={[{ paddingVertical: padding.small }, style]}>
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
