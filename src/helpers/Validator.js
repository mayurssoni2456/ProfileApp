import validator from 'validator';

export function isMobilePhone(text) {
  console.log(text);
  return validator.isMobilePhone(text);
}

export function isEmail(text) {
  return validator.isEmail(text);
}

export function isPostalCode(text, locale = '') {
  // console.log(text, locale);
  return true;
  return validator.isPostalCode(text, locale);
}

export function isEmpty(text) {
  return validator.isEmpty(text);
}
