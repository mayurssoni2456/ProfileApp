import React from 'react';
import { Text, View } from 'react-native';
import { ApplicationStyle } from '@themes/index';

export default function ProfileHeader({ profile }) {
  return (
    <View style={ApplicationStyle.card}>
      <Text style={ApplicationStyle.title}>
        {`${profile.firstName} ${profile.lastName}`}
      </Text>
      <Text style={[ApplicationStyle.text, { paddingBottom: 0 }]}>
        {profile.id}
      </Text>
    </View>
  );
  w;
}
