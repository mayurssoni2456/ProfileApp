import * as types from './actionTypes';

export function editContactDetails(contact) {
  return {
    type: types.EDIT_CONTACT_DETAILS,
    contact,
  };
}
