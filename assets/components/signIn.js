import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Input, CheckBox, Icon } from 'react-native-elements'
import Signup from './Signup'
export default class Signin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          leftIcon={{ type: 'font-awesome', name: 'user-o' }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'key' }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          containerStyle={styles.formInput}
        />
        <Button title="Sign In" />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
