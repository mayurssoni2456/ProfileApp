import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Icons } from '../helpers/imageMapper';
import { ApplicationStyle, Colors } from '../Themes';

export default function ButtonTitleIcon({ title, onPress, style }) {
  return (
    <View style={[style]}>
      <TouchableOpacity style={ApplicationStyle.navButton} onPress={onPress}>
        <Text style={ApplicationStyle.navTextButton}>{title}</Text>
        <Image source={Icons.rightArrow} style={ApplicationStyle.icon} />
      </TouchableOpacity>
    </View>
  );
}
