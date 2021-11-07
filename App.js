import * as React from 'react'
import DrawerNavigator from './navigator/DrawerNavigator'

import {NavigationContainer} from '@react-navigation/native'

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
  }
}