import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    id: '13619839173',
    contact: {
      cell: '1232123132',
      email: 'john@doe.com',
      postalcode: '1008',
      houseNumber: '4118',
      addition: '',
      street: 'Rock street',
      city: 'New York',
    },
  },
};

export default function profileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.EDIT_CONTACT_DETAILS:
      return {
        ...state,
        profile: { ...state.profile, contact: action.contact },
      };
    default:
      return state;
  }
}
