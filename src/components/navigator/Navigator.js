import { StackNavigator } from 'react-navigation';
import Home from '../home/Home.js';
import Drawer from '../drawer/Drawer.js';
import { colors } from '../../theme/index.js';

const navigationConfig = {
  initialRouteName: 'Drawer',
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
  Drawer: { screen: Drawer },
  Home: { screen: Home }
}, navigationConfig);

export default Navigator;
