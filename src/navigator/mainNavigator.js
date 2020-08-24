import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210196Navigator from '../features/BlankScreen210196/navigator';
import CopyOfBlankScreen010194Navigator from '../features/CopyOfBlankScreen010194/navigator';
import BlankScreen010192Navigator from '../features/BlankScreen010192/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210196: { screen: BlankScreen210196Navigator },
CopyOfBlankScreen010194: { screen: CopyOfBlankScreen010194Navigator },
BlankScreen010192: { screen: BlankScreen010192Navigator },

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
