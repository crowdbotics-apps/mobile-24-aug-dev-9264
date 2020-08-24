import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen010198Navigator from '../features/CopyOfBlankScreen010198/navigator';
import BlankScreen210197Navigator from '../features/BlankScreen210197/navigator';
import BlankScreen210196Navigator from '../features/BlankScreen210196/navigator';
import CopyOfBlankScreen010194Navigator from '../features/CopyOfBlankScreen010194/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen010198: { screen: CopyOfBlankScreen010198Navigator },
BlankScreen210197: { screen: BlankScreen210197Navigator },
BlankScreen210196: { screen: BlankScreen210196Navigator },
CopyOfBlankScreen010194: { screen: CopyOfBlankScreen010194Navigator },

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
