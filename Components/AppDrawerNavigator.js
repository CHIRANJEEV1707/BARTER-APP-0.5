import * as React from 'react'
import {createDrawerNavigation} from 'react-navigation-drawer';
import {AppTabNavigatior} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigation ({
          Home : {
                    screen : AppTabNavigator
                    },
                  },
                  {
                    contentComponent:CustomSideBarMenu
                  },
                  {
                    initialRouteName : 'Home'
                  })