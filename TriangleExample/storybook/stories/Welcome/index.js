import React from "react";
import PropTypes from "prop-types";
import { View, Text, Linking, Image } from "react-native";

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
    logo: {
      height: 75,
      width: 75,
    },
  };

  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Image
          source={require("../../../assets/splash.png")}
          style={this.styles.logo}
          resizeMode={"contain"}
        />
        <Text style={this.styles.header}>React Native Triangle</Text>
        <Text style={this.styles.content}>
          This is a storybook app for the{" "}
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() =>
              Linking.openURL(
                "https://github.com/react-native-toolkit/triangle"
              )
            }
          >
            React Native Triangle
          </Text>{" "}
          library.
        </Text>
        <Text style={this.styles.content}>
          {`👈 You can find all the possible triangles in the left sidebar
👉 You can modify the props in the right sidebar
👇 Use the below buttons to open the respective sidebars`}
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
