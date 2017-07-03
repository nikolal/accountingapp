import { DrawerNavigator } from 'react-navigation';
import Tabs from '../tabs/Tabs.js';
import Login from '../login/Login.js';

const Drawer = DrawerNavigator({
  Tabs: { screen: Tabs },
  Login: { screen: Login },
});

export default Drawer;


// Dynamic example
// const routesArr = [
//   'Home',
//   'About'
// ];
//
// const routes = arr =>
//   arr.map(x => ({ [x]: { 'screen': Tabs }})); // add Tabs screen for each item of routesArr
//
// const Drawer = DrawerNavigator(Object.assign({}, ...routes(routesArr))); // Flatten mapped objects into one object and pass it to DrawerNavigator

// export default Drawer;
