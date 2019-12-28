//This is an example code for NavigationDrawer//
import React, { Component } from 'react'
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './assets/components/Home'
import Signup from './assets/components/Signup'
import Signin from './assets/components/signIn'
import about from './assets/components/about'

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer()
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon name="cutlery" type="font-awesome" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    )
  }
}

const homeNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ff5c72'
      },
      headerTintColor: '#fff'
    })
  }
})

const SigninNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Signin: {
    screen: Signin,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign In',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ff5c72'
      },
      headerTintColor: '#fff'
    })
  }
})

const SignupNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign Up',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ff5c72'
      },
      headerTintColor: '#fff'
    })
  }
})
const aboutNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  about: {
    screen: about,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ff5c72'
      },
      headerTintColor: '#fff'
    })
  }
})

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: {
    //Title
    screen: homeNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  SigninNavigator: {
    //Title
    screen: SigninNavigator,
    navigationOptions: {
      drawerLabel: 'Sign In'
    }
  },
  SignupNavigator: {
    //Title
    screen: SignupNavigator,
    navigationOptions: {
      drawerLabel: 'Sign Up'
    }
  },
  aboutNavigator: {
    //Title
    screen: aboutNavigator,
    navigationOptions: {
      drawerLabel: 'About Us'
    }
  }
})

export default createAppContainer(DrawerNavigatorExample)
