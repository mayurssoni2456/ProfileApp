import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import ButtonTitle from '../src/common/ButtonTitle';
import ButtonTitleIcon from '../src/common/ButtonTitleIcon';
import Input from '../src/common/Input';

test('ButtonTitle Component Testing', () => {
  const tree = renderer.create(<ButtonTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonTitleIcon Component Testing', () => {
  const tree = renderer.create(<ButtonTitleIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input Component Testing', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
