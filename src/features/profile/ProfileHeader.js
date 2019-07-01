import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ApplicationStyle } from '../../Themes';

export default function ProfileHeader() {
  return (
    <View style={ApplicationStyle.card}>
      <Text style={ApplicationStyle.title}>John Doe</Text>
      <Text style={[ApplicationStyle.text, { paddingBottom: 0 }]}>
        1231233312
      </Text>
    </View>
  );w
}
