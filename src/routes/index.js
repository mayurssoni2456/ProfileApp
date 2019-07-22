import { createStackNavigator, createAppContainer } from 'react-navigation';
import Profile from '../features/profile/index';
import Contact from '../features/profile/Contact';
import { ApplicationStyle } from '../Themes';

const AppStack = createStackNavigator(
  {
    profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Contact',
      }),
    },
    contact: {
      screen: Contact,
      navigationOptions: ({ navigation }) => ({
        title: 'Update Contact',
      }),
    },
  },
  {
    initialRouteName: 'profile',
    defaultNavigationOptions: {
      headerStyle: {
        ...ApplicationStyle.navStyle,
      },
    },
  }
);

export default createAppContainer(AppStack);
