import React, { useState } from 'react';
import { useCallback, useDispatch, useSelector } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ApplicationStyle, Colors } from '../../Themes';
import { Input, ButtonTitle } from '../../common';
import validator from 'validator';
import { editContactDetails } from '../../actions/profileActions';

const Contact = props => {
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

  validate = () => {
    setCellValid(validator.isMobilePhone(cell));
    setEmailValid(validator.isEmail(email));
    setPostalCodeValid(validator.isPostalCode(postalcode, 'NL'));
    setCityValid(!validator.isEmpty(city));

    // updateContactDetails();
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

  onChangeText = (key, val) => {
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
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          ApplicationStyle.card,
          { borderBottomWidth: 0, paddingBottom: 10 },
        ]}>
        <Text style={ApplicationStyle.sectionTitle}>Contact Details</Text>
        <Input
          title={'Telefoonnummer'}
          value={cell}
          onChangeText={val => this.onChangeText('cell', val)}
          isValid={cellValid}
        />
        <Input
          title={'E-mailadres'}
          value={email}
          onChangeText={val => this.onChangeText('email', val)}
          isValid={emailValid}
        />
        <Input
          title={'Postcode'}
          value={postalcode}
          isValid={postalCodeValid}
          onChangeText={val => this.onChangeText('postalcode', val)}
        />

        <View style={{ flexDirection: 'row' }}>
          <Input
            style={{ marginRight: 20 }}
            title={'house Number'}
            value={houseNumber}
            onChangeText={val => this.onChangeText('housenumber', val)}
          />
          <Input
            title={'Toevoeging'}
            value={addition}
            onChangeText={val => this.onChangeText('addition', val)}
          />
        </View>
        <Input
          title={'Straat'}
          value={street}
          onChangeText={val => this.onChangeText('street', val)}
        />
        <Input
          title={'Plaats'}
          value={city}
          isValid={cityValid}
          onChangeText={val => this.onChangeText('city', val)}
        />

        <ButtonTitle
          title={'Contactgegevens bijwerken'}
          style={{ margin: 20, justifyContent: 'center' }}
          onPress={this.validate}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Contact;
