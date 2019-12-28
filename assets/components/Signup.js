import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, CheckBox, Button, Icon } from "react-native-elements";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      remember: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="First Name"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={firstname => this.setState({ firstname })}
          value={this.state.firstname}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Last Name"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={lastname => this.setState({ lastname })}
          value={this.state.lastname}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope-o" }}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          containerStyle={styles.formInput}
        />
        <CheckBox
          title="Remember Me"
          center
          checked={this.state.remember}
          onPress={() => this.setState({ remember: !this.state.remember })}
          containerStyle={styles.formCheckbox}
        />
        <View style={styles.formButton}>
          <Button
            onPress={() => this.handleRegister()}
            title="Register"
            icon={
              <Icon
                name="user-plus"
                type="font-awesome"
                size={24}
                color="white"
              />
            }
            buttonStyle={{
              backgroundColor: "#512DA8"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
