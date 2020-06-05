import React from "react";
import { View, StyleProp, ViewStyle, ViewProps } from "react-native";

export type triangleTypeTypes =
  | "equilateral"
  | "isosceles"
  | "scalene"
  | "rightAngle";

export type equilateralTriangleModeTypes = "top" | "right" | "bottom" | "left";

export type isoscelesTriangleModeTypes = "top" | "right" | "bottom" | "left";

export type scaleneTriangleModeTypes = "top" | "right" | "bottom" | "left";

export type rightAngleTriangleModeTypes =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type triangleModeTypes =
  | equilateralTriangleModeTypes
  | isoscelesTriangleModeTypes
  | scaleneTriangleModeTypes
  | rightAngleTriangleModeTypes;

export interface ITriangle extends ViewProps {
  color: string;
  type?: triangleTypeTypes;
}

export interface IEquilateralTriangle extends ITriangle {
  type?: "equilateral";
  mode: equilateralTriangleModeTypes;
  base: number;
}

export interface IIsoscelesTriangle extends ITriangle {
  type: "isosceles";
  mode: isoscelesTriangleModeTypes;
  base: number;
  height: number;
}

export interface IRightAngleTriangle extends ITriangle {
  type: "rightAngle";
  mode: rightAngleTriangleModeTypes;
  base: number;
  height: number;
}

export interface IScaleneTriangle extends ITriangle {
  type: "scalene";
  mode: isoscelesTriangleModeTypes;
  height: number;
  left: number;
  right: number;
}

export type triangleProps =
  | IEquilateralTriangle
  | IIsoscelesTriangle
  | IScaleneTriangle
  | IRightAngleTriangle;

const equilateralHeight = (base: number) => (base / 2) * Math.sqrt(3);
const equilateralSide = (base: number) => base / 2;

const isoscelesHeight = (height: number) => height;
const isoscelesBase = (base: number) => base / 2;

const Triangle = ({
  mode,
  base,
  color,
  type = "equilateral",
  height,
  left,
  right,
  style,
  ...otherProps
}: triangleProps) => {
  let triangleStyle: StyleProp<ViewStyle> = {
    width: 0,
    height: 0,
    borderStyle: "solid",
  };

  switch (mode) {
    case "top":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
      };
      break;

    case "bottom":
      triangleStyle = {
        ...triangleStyle,
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: color,
      };
      break;

    case "left":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: color,
      };
      break;

    case "right":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: color,
      };
      break;

    case "bottom-left":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: color,
      };
      break;

    case "bottom-right":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
      };
      break;

    case "top-left":
      triangleStyle = {
        ...triangleStyle,
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: color,
      };
      break;

    case "top-right":
      triangleStyle = {
        ...triangleStyle,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: color,
      };
      break;

    default:
      break;
  }

  switch (type) {
    case "equilateral":
      switch (mode) {
        case "top":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: 0,
            borderRightWidth: equilateralSide(base),
            borderLeftWidth: equilateralSide(base),
            borderBottomWidth: equilateralHeight(base),
          };
          break;

        case "bottom":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: equilateralHeight(base),
            borderRightWidth: equilateralSide(base),
            borderLeftWidth: equilateralSide(base),
            borderBottomWidth: 0,
          };
          break;

        case "left":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: equilateralSide(base),
            borderRightWidth: equilateralHeight(base),
            borderLeftWidth: 0,
            borderBottomWidth: equilateralSide(base),
          };
          break;

        case "right":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: equilateralSide(base),
            borderRightWidth: 0,
            borderLeftWidth: equilateralHeight(base),
            borderBottomWidth: equilateralSide(base),
          };
          break;

        default:
          break;
      }
      break;

    case "isosceles":
      switch (mode) {
        case "top":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: 0,
            borderRightWidth: isoscelesBase(base),
            borderLeftWidth: isoscelesBase(base),
            borderBottomWidth: isoscelesHeight(height),
          };
          break;

        case "bottom":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: isoscelesHeight(height),
            borderRightWidth: isoscelesBase(base),
            borderLeftWidth: isoscelesBase(base),
            borderBottomWidth: 0,
          };
          break;

        case "left":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: isoscelesBase(base),
            borderRightWidth: isoscelesHeight(height),
            borderLeftWidth: 0,
            borderBottomWidth: isoscelesBase(base),
          };
          break;

        case "right":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: isoscelesBase(base),
            borderRightWidth: 0,
            borderLeftWidth: isoscelesHeight(height),
            borderBottomWidth: isoscelesBase(base),
          };
          break;

        default:
          break;
      }
      break;

    case "scalene":
      switch (mode) {
        case "top":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: 0,
            borderRightWidth: right,
            borderLeftWidth: left,
            borderBottomWidth: height,
          };
          break;

        case "bottom":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: height,
            borderRightWidth: right,
            borderLeftWidth: left,
            borderBottomWidth: 0,
          };
          break;

        case "left":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: right,
            borderRightWidth: height,
            borderLeftWidth: 0,
            borderBottomWidth: left,
          };
          break;

        case "right":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: right,
            borderRightWidth: 0,
            borderLeftWidth: height,
            borderBottomWidth: left,
          };
          break;

        default:
          break;
      }
      break;

    case "rightAngle":
      switch (mode) {
        case "bottom-left":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: height,
            borderRightWidth: 0,
            borderLeftWidth: base,
            borderBottomWidth: 0,
          };
          break;

        case "bottom-right":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: base,
            borderBottomWidth: height,
          };
          break;

        case "top-left":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: height,
            borderRightWidth: base,
            borderLeftWidth: 0,
            borderBottomWidth: 0,
          };
          break;

        case "top-right":
          triangleStyle = {
            ...triangleStyle,
            borderTopWidth: 0,
            borderRightWidth: base,
            borderLeftWidth: 0,
            borderBottomWidth: height,
          };
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
  return <View style={[triangleStyle, style]} {...otherProps} />;
};

export default Triangle;
