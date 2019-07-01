import { createStackNavigator, createAppContainer } from 'react-navigation';
import Profile from '../features/profile/index';
import Contact from '../features/profile/Contact';
import { ApplicationStyle } from '../Themes';

const AppStack = createStackNavigator(
  {
    profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Gegevens',
      }),
    },
    contact: {
      screen: Contact,
      navigationOptions: ({ navigation }) => ({
        title: 'Cotactsgegevens Wijzigen',
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
