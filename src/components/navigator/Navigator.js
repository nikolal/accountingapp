import { StackNavigator } from 'react-navigation';
import Home from '../home/Home.js';
import { colors } from '../../theme/index.js';

const navigationConfig = {
  initialRouteName: 'Home',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.black,
    },
    headerTitleStyle: {
      color: colors.white,
    }
  }),
};

const Navigator = StackNavigator({
  Home: { screen: Home }
}, navigationConfig);

export default Navigator;
