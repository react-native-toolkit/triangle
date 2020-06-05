<div align="center">

![logo.png](./assets/logo.png)

# React Native Triangle

Draw geometrically accurate triangles in React Native

Supports equilateral, isosceles, scalene & right-angled triangles

Built on top of the inbuilt `<View/>` component

<!-- [![Build Status][build-badge]][build] -->

[![Maintainability][maintainability-badge]][maintainability-url]
[![Test Coverage][coverage-badge]][coverage-url]

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

---

### Compatible with Expo & React Native Web 🚀

### PRs Welcome 👍✨

</div>

- 📦 [Installation](#installation)
- ℹ️ [Usage](#usage)
- 💡 [Examples](#examples)

## Installation

```sh
#npm
npm install --save @react-native-toolkit/triangle

#yarn
yarn add @react-native-toolkit/triangle
```

## Motivation

Triangles are an important part of user interfaces and I needed full control over the triangle dimensions. I initially tried [react-native-triangle](https://www.npmjs.com/package/react-native-triangle) but I had very less control over the triangle properties. Especially scalene & isosceles triangles.

This library is focused on providing an easy API to create all possible triangles based on the [CSS Triangle Generator](http://apps.eky.hk/css-triangle-generator/)

## Usage

By default, the Triangle component renders an equilateral triangle

```jsx
import React from "react";
import Triangle from "@react-native-toolkit/triangle";

const App = () => {
  return <Triangle mode={"top"} base={50} color={"red"} />;
};
```

This will render an equilateral triangle of color "red" & side - 50

### Properties

#### Equilateral Triangle - All three sides equal

##### `type?: "equilateral"`

Type of the triangle. Optional for equilateral triangle

##### `mode: "top" | "bottom" | "left" | "right"`

Direction in which the triangle is facing

##### `base: number`

Length of the base & since it's equilateral all the sides have the length of the base

##### `color: string`

Color of the triangle

#### Isosceles Triangle - Two sides of the triangle are equal

##### `type: "isosceles"`

Type of the triangle.

##### `mode: "top" | "bottom" | "left" | "right"`

Direction in which the triangle is facing

##### `base: number`

Length of the base

##### `height: number`

Height of the triangle from base to the peak. The two connecting sides will have the equal length.

##### `color: string`

Color of the triangle

#### Scalene Triangle - All three sides of the triangle have different lengths

##### `type: "scalene"`

Type of the triangle.

##### `mode: "top" | "bottom" | "left" | "right"`

Direction in which the triangle is facing

##### `height: number`

Height of the triangle from base to the peak.

##### `left: number`

Length of the side on the left of the line representing height of the triangle.

##### `right: number`

Length of the side on the right of the line representing height of the triangle.

##### `color: string`

Color of the triangle

#### Right Angled Triangle - A triangle with angle of 90° on one of it's sides

##### `type: "rightAngle"`

Type of the triangle.

##### `mode: "top-left" | "top-right" | "bottom-left" | "bottom-right"`

Direction in which the triangle is facing

##### `base: number`

Length of the base

##### `height: number`

Height of the triangle from base to the peak. The two connecting sides will have the equal length.

##### `color: string`

Color of the triangle

#### ViewProps

All existing `ViewProps` are supported by this component as it extends the `<View/>` component. However, it cannot have any children as creating a triangle requires height & width of the `View` to be 0.

## Examples

- [App Containing the storybook][storybook-app]
- [Web version of the storybook app][storybook-web](might not work as good as the app version)
- [CodeSandbox example][codesandbox-example]

## Licenses

MIT © [DaniAkash][twitter]

<!-- [build]: https://github.com/react-native-toolkit/@react-native-toolkit/triangle/actions
[build-badge]: https://github.com/react-native-toolkit/@react-native-toolkit/triangle/workflows/build/badge.svg -->

[coverage-badge]: https://api.codeclimate.com/v1/badges/e1c3ddf91cf80781a0d9/test_coverage
[coverage-url]: https://codeclimate.com/github/react-native-toolkit/react-native-triangle-view/test_coverage
[maintainability-badge]: https://api.codeclimate.com/v1/badges/e1c3ddf91cf80781a0d9/maintainability
[maintainability-url]: https://codeclimate.com/github/react-native-toolkit/react-native-triangle-view/maintainability
[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/@react-native-toolkit/triangle
[bundle-phobia]: https://bundlephobia.com/result?p=@react-native-toolkit/triangle
[downloads-badge]: https://img.shields.io/npm/dm/@react-native-toolkit/triangle.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@react-native-toolkit/triangle
[package]: https://www.npmjs.com/package/@react-native-toolkit/triangle
[version-badge]: https://img.shields.io/npm/v/@react-native-toolkit/triangle.svg?style=flat-square
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/react-native-toolkit/triangle.svg?style=social
[github-watch]: https://github.com/react-native-toolkit/triangle/watchers
[github-star-badge]: https://img.shields.io/github/stars/react-native-toolkit/triangle.svg?style=social
[github-star]: https://github.com/react-native-toolkit/triangle/stargazers
[storybook-app]: https://expo.io/@daniakash/TriangleExample
[storybook-web]: https://react-native-toolkit.github.io/triangle/
[codesandbox-example]: https://codesandbox.io/s/triangle-m0z2l
