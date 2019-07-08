import React from 'react';
import 'react-native';
// import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });

import ProfileDetails from '../src/features/profile/ProfileDetails';

// it('Test Address formatter', () => {
//   const contactObj = {
//     cell: '9833565771',
//     email: 'john@doe.com',
//     postalcode: '480100',
//     houseNumber: '4118',
//     addition: '',
//     street: 'Parivartan ghatkopar',
//     city: 'Amsterdam',
//   };

//   const wrapper = shallow(<ProfileDetails contact={contactObj} />);

//   //   const instance = component.instance();
//   //   component.instance();

//   console.log('instance', wrapper.debug());
//   console.log('address', wrapper.find('address').props());
//   // const address = ProfileDetails(null, contactObj).formatAddress();
//   // console.log('address', address);
// });
