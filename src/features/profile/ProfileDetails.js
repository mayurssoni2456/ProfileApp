import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import { ApplicationStyle } from '@themes/index';
import { ButtonTitleIcon } from '@common/index';
import { Icons } from '@helpers/imageMapper';
import Strings from '@localization/StringEN';
const { fontSize, padding } = ApplicationStyle;

const TextComponent = ({ value, id = null }) => (
  <View>
    <Text id={id} style={ApplicationStyle.text}>
      {value}
    </Text>
  </View>
);

export default function ProfileDetails({ onEditContact, contact }) {
  formatAddress = contact => {
    const arrAddress = [contact.houseNumber, contact.addition, contact.street];
    const address = arrAddress.filter(_ => _).join(', ');
    return address;
  };

  return (
    <View style={{ paddingBottom: padding.medium }}>
      <View style={ApplicationStyle.card}>
        <Text style={ApplicationStyle.sectionTitle}>
          {Strings.contactDetails}
        </Text>
        <TextComponent value={contact.cell} />
        <TextComponent value={contact.email} />
        <TextComponent id={'address'} value={formatAddress(contact)} />
        <TextComponent value={contact.city} />
      </View>
      <ButtonTitleIcon
        title={Strings.updateContactDetails}
        style={{ margin: 20 }}
        onPress={onEditContact}
        icon={Icons.rightArrow}
      />
    </View>
  );
}

ProfileDetails.propTypes = {
  contact: PropTypes.object,
};
