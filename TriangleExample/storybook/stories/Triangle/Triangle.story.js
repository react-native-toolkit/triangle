import React from "react";

import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-ondevice-knobs";
import {
  EquilateralTriangle,
  IsoscelesTriangle,
  RightAngleTriangle,
  ScaleneTriangle,
} from "../../../Components/Triangle/Triangle";

storiesOf("Triangle", module)
  .addDecorator(withKnobs)
  .add("Equilateral", () => <EquilateralTriangle />)
  .add("Isosceles", () => <IsoscelesTriangle />)
  .add("Scalene", () => <ScaleneTriangle />)
  .add("RightAngled", () => <RightAngleTriangle />);
