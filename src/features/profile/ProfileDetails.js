import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ApplicationStyle } from '../../Themes';
import { ButtonTitleIcon } from '../../common';
import { Icons } from '../../helpers/imageMapper';

const TextComponent = ({ value }) => (
  <View>
    <Text style={ApplicationStyle.text}>{value}</Text>
  </View>
);

export default function ContactDetails({ onEditContact, contact }) {
  formatAddress = contact => {
    const arrAddress = [contact.houseNumber, contact.addition, contact.street];
    const address = arrAddress.filter(_ => _).join(', ');
    return address;
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={ApplicationStyle.card}>
        <Text style={ApplicationStyle.sectionTitle}>Contact Details</Text>
        <TextComponent value={contact.cell} />
        <TextComponent value={contact.email} />
        <TextComponent value={formatAddress(contact)} />
        <TextComponent value={contact.city} />
      </View>
      <ButtonTitleIcon
        title={'Update Contact Details'}
        style={{ margin: 20 }}
        onPress={onEditContact}
        icon={Icons.rightArrow}
      />
    </View>
  );
}
