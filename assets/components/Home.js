import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native'
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons
} from 'react-native-fontawesome'
import { Icon } from 'react-native-elements'

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../img/homepage.jpg')}
          style={styles.MainContainer}>
          <View>
            <Text style={styles.textColor}>Planter:</Text>
            <Text style={styles.textColor}>
              Buy, Sell and, Trade locally grown produce
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.homeSecond}>
          <Text style={styles.textColor}>Download Now:</Text>
          <View style={styles.half}>
            <Icon
              iconStyle={{ color: 'white', height: 50, width: 50 }}
              name="android"
              type="font-awesome"
              size={24}
            />
            <Icon
              iconStyle={{ color: 'white', height: 50, width: 50 }}
              name="social-apple"
              type="foundation"
              size={24}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingTop: 50
          }}>
          <Image
            style={styles.drawerImage}
            source={require('../img/screenshot.png')}
          />

          <View style={styles.homeThird}>
            <Text style={styles.homeThirdTextHeader}>How Plantr Works:</Text>
            <Text style={styles.homeThirdTextHeader}>Grow Produce?</Text>
            <Text style={styles.homeThirdText}>
              You Can Sell, Donate or Trade extra produce you grow in your
              neighborhood
            </Text>
            <Text style={styles.homeThirdTextHeader}>
              Want Wholesome Homegrown Produce?
            </Text>
            <Text style={styles.homeThirdText}>
              Use our map to find growers near you. You can also use our search
              system narrow your search
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const space = 5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: 200
  },
  textColor: {
    color: 'white'
  },
  half: {
    height: 50,
    width: 50,
    flex: 1,
    flexDirection: 'row'
  },
  homeSecond: {
    backgroundColor: '#ff5c72',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  homeThird: {
    width: '50%',
    paddingLeft: 5
  },
  homeThirdTextHeader: {
    fontWeight: 'bold'
  },

  drawerImage: {
    width: '50%',
    height: '110%'
  },
  childStyle: {
    width: '50%',
    height: 100,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: space
  }
})
