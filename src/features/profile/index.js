import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Platform, Button, Text, View } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ContactDetails from './ProfileDetails';
import { ApplicationStyle } from '../../Themes';

class Profile extends Component {
  // static navigationOptions = navigation => ({
  //   title: 'Contacts',
  // });
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEditContact = () => {
    this.props.navigation.navigate('contact', { contact: this.props.contact });
  };

  render() {
    const { OnUpdateContact } = this;
    const { contact } = this.props;

    return (
      <View style={ApplicationStyle.viewPadding}>
        <ProfileHeader />
        <ContactDetails onEditContact={this.onEditContact} contact={contact} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    contact: state.profileReducer.profile.contact,
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
