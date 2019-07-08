import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { ApplicationStyle } from '../Themes';

export default function ButtonTitle({ title, onPress, style, disabled }) {
  return (
    <View style={[ApplicationStyle.navButton, style]}>
      <TouchableOpacity
        disabled={!disabled}
        style={[{ justifyContent: 'center' }]}
        onPress={onPress}>
        <Text style={ApplicationStyle.navTextButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

/* validate = val => {
    // console.log(validateForm);
    if (validator.isMobilePhone(cell)) {
      // setCellValid(true);
      setValidateForm({ ...validateForm, cellValid: true });
    } else {
      // setCellValid(false);
      setValidateForm({ ...validateForm, cellValid: false });
    }

    setTimeout(() => {
      console.log(validateForm);
      if (validator.isEmail(email)) {
        // setEmailValid(true);
        setValidateForm({ ...validateForm, emailValid: true });
      } else {
        // setEmailValid(false);
        setValidateForm({ ...validateForm, emailValid: false });
      }
    }, 1000);
  }; */

/* const [validateForm, setValidateForm] = useState({
    cellValid: true,
    emailValid: true,
    cityValid: true,
    postalCodeValid: true,
  }); */
