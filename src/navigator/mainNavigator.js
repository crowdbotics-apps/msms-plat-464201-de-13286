import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012226Navigator from '../features/BlankScreen012226/navigator';
import BlankScreen112224Navigator from '../features/BlankScreen112224/navigator';
import BlankScreen012221Navigator from '../features/BlankScreen012221/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012226: { screen: BlankScreen012226Navigator },
BlankScreen112224: { screen: BlankScreen112224Navigator },
BlankScreen012221: { screen: BlankScreen012221Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
