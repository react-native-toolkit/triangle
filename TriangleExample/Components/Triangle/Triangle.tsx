import React from "react";
import Triangle, {
  equilateralTriangleModeTypes,
  rightAngleTriangleModeTypes,
} from "@react-native-toolkit/triangle";
import { number, select, color } from "@storybook/addon-knobs";

const label = "Mode";
const options: { [key: string]: equilateralTriangleModeTypes } = {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
};
const defaultValue = "top";

export const EquilateralTriangle = () => {
  const base = number("base", 50);
  const mode = select(label, options, defaultValue);
  const colorValue = color("color", "red");

  return <Triangle base={base} mode={mode} color={colorValue} />;
};

export const IsoscelesTriangle = () => {
  const base = number("base", 75);
  const height = number("height", 190);
  const mode = select(label, options, defaultValue);
  const colorValue = color("color", "red");

  return (
    <Triangle
      type={"isosceles"}
      mode={mode}
      base={base}
      height={height}
      color={colorValue}
    />
  );
};

export const ScaleneTriangle = () => {
  const mode = select(label, options, defaultValue);
  const height = number("height", 50);
  const left = number("left", 200);
  const right = number("right", 100);
  const colorValue = color("color", "red");

  return (
    <Triangle
      type={"scalene"}
      mode={mode}
      height={height}
      color={colorValue}
      left={left}
      right={right}
    />
  );
};

export const RightAngleTriangle = () => {
  const base = number("base", 75);
  const height = number("height", 190);

  const rightAngleOptions: { [key: string]: rightAngleTriangleModeTypes } = {
    TopLeft: "top-left",
    TopRight: "top-right",
    BottomLeft: "bottom-left",
    BottomRight: "bottom-right",
  };

  const mode = select(label, rightAngleOptions, "top-left");
  const colorValue = color("color", "red");

  return (
    <Triangle
      type={"rightAngle"}
      mode={mode}
      base={base}
      height={height}
      color={colorValue}
    />
  );
};
