import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native'
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons
} from 'react-native-fontawesome'
import { Icon, Header } from 'react-native-elements'
export default class aboutNavigator extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text accessibilityRole="header">Why Does Plantr Exist?</Text>
          <Text>
            Plantr started in 2019 in order to fufill its creators belief that
            all people should have access to homegrown produce and that society
            should take steps towards reducing food waste and CO2 emissions.
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../img/aboutustwo.jpg')}
          />
          <Text>What Does Plantr Do?</Text>
          <Text>
            Plantr allows people to connect with people in their community,
            build relationships, gain access to fresh produce, and reduce their
            carbon footprint.
          </Text>
        </View>
      </ScrollView>
    )
  }
}
