import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ApplicationStyle } from '@themes/index';
import { Input, ButtonTitle } from '@common/index';
import { editContactDetails } from '@actions/profileActions';
import {
  isMobilePhone,
  isEmail,
  isPostalCode,
  isEmpty,
} from '@helpers/Validator';
import Strings from '@localization/StringEN';

const { fontSize, padding } = ApplicationStyle;
const Contact = (props: Props) => {
  const { contact } = props.navigation.state.params;
  const { navigation } = props;

  const [cellValid, setCellValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [postalCodeValid, setPostalCodeValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);

  const [cell, setCell] = useState(contact.cell);
  const [email, setEmail] = useState(contact.email);
  const [postalcode, setPostalcode] = useState(contact.postalcode);
  const [houseNumber, setHouseNumber] = useState(contact.houseNumber);
  const [addition, setAddition] = useState(contact.addition);
  const [street, setStreet] = useState(contact.street);
  const [city, setCity] = useState(contact.city);

  const dispatch = useDispatch();

  const onPress = any => {
    dispatch(
      editContactDetails({
        cell,
        email,
        postalcode,
        houseNumber,
        addition,
        street,
        city,
      })
    );

    navigation.goBack();
  };

  const onChangeText = (key, val) => {
    switch (key) {
      case 'cell':
        setCell(val);
        break;
      case 'email':
        setEmail(val);
        break;

      case 'postalcode':
        setPostalcode(val);
        break;

      case 'housenumber':
        setHouseNumber(val);
        break;

      case 'addition':
        setAddition(val);
        break;

      case 'street':
        setStreet(val);
        break;

      case 'city':
        setCity(val);
        break;
    }

    setTimeout(() => {
      validate();
    }, 10);
  };

  validate = () => {
    setCellValid(isMobilePhone(cell));
    setEmailValid(isEmail(email));
    setPostalCodeValid(isPostalCode(postalcode, 'NL'));
    setCityValid(!isEmpty(city));
  };

  const { contactUpdate } = Strings;
  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          ApplicationStyle.card,
          { borderBottomWidth: 0, paddingBottom: padding.small },
        ]}>
        <Input
          title={Strings.telephone}
          value={cell}
          onChangeText={val => onChangeText('cell', val)}
          isValid={cellValid}
        />
        <Input
          title={Strings.emailAddress}
          value={email}
          onChangeText={val => onChangeText('email', val)}
          isValid={emailValid}
        />
        <Input
          title={Strings.postcode}
          value={postalcode}
          isValid={postalCodeValid}
          onChangeText={val => onChangeText('postalcode', val)}
        />

        <View style={{ flexDirection: 'row' }}>
          <Input
            style={{ marginRight: 20 }}
            title={Strings.houseNumber}
            value={houseNumber}
            onChangeText={val => onChangeText('housenumber', val)}
          />
          <Input
            title={Strings.addition}
            value={addition}
            onChangeText={val => onChangeText('addition', val)}
          />
        </View>
        <Input
          title={Strings.street}
          value={street}
          onChangeText={val => onChangeText('street', val)}
        />
        <Input
          title={Strings.city}
          value={city}
          isValid={cityValid}
          onChangeText={val => onChangeText('city', val)}
        />

        <ButtonTitle
          disabled={cellValid && emailValid && postalCodeValid && cityValid}
          title={contactUpdate}
          style={{ margin: 20, justifyContent: 'center' }}
          onPress={onPress}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

Contact.propTypes = {
  onPress: PropTypes.func,
};
export default Contact;
