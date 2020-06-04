import React from "react";
import { AppRegistry } from "react-native";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import CenterView from "./stories/CenterView";

import "./rn-addons";

addDecorator((story) => <CenterView>{story()}</CenterView>);

// import stories
configure(() => {
  require("./stories");
  require("./stories/Triangle/Triangle.story.js");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  tabOpen: -1,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
