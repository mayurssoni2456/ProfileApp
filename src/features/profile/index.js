import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ContactDetails from './ProfileDetails';
import { ApplicationStyle } from '@themes/index';

class Profile extends Component<Props> {
  onEditContact = () => {
    this.props.navigation.navigate('contact', {
      contact: this.props.profile.contact,
    });
  };

  render() {
    const { profile } = this.props;

    return (
      <View>
        <ProfileHeader profile={profile} />
        <ContactDetails
          onEditContact={this.onEditContact}
          contact={profile.contact}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
