import React from 'react';
import 'react-native';

import {
  isMobilePhone,
  isPostalCode,
  isEmail,
  isEmpty,
} from '../src/helpers/Validator';

it('Test If given Mobile Number is invalid', () => {
  const isInValid = isMobilePhone('98335');
  expect(isInValid).toBeFalsy();
});

it('Test If given Mobile Number is Valid', () => {
  const isValid = isMobilePhone('9833565771');
  expect(isValid).toBeTruthy();
});

it('Test If Postal Code is Valid', () => {
  const isValid = isPostalCode('1008 NL', 'NL');
  expect(isValid).toBeTruthy();
});

it('Test If Postal Code is InValid', () => {
  const isInValid = isPostalCode('100 NL', 'NL');
  expect(isInValid).toBeFalsy();
});

it('Test If Email is Valid', () => {
  const isValid = isEmail('m@s.com');
  expect(isValid).toBeTruthy();
});

it('Test If Email is InValid', () => {
  const isInValid = isEmail('m@s');
  expect(isInValid).toBeFalsy();
});

it('Test If isEmpty function', () => {
  const empty = isEmpty('');
  expect(empty).toBeTruthy();
});
