import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {};

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View style={styles.Wrapper}>
          <Text>Your Home Screen</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(HomeScreen);
