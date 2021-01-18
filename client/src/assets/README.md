# Spinner comes as a default export:

import Spinner from 'react-spinner-simple'

![Spinner Image](https://ibb.co/znxpKJF)

## THE STYLESHEET IS IN SASS->.SCSS FILE

## Install:

```bash
$ npm i --save react-spinner-simple
```

```bash
$ yarn add i --save react-spinner-simple
```

## Props description for the component:

| Prop Name   | Prop Type | Prop Description        | Default          |
| ----------- | --------- | ----------------------- | ---------------- |
| w           | String    | width                   | -                |
| h           | String    | height                  | -                |
| divWrapper  | String    | DIV which wraps the SVG | 'spinnerWrapper' |
| svgClass    | String    | class name for SVG      | -                |
| svgPath     | String    | class name for Path     | -                |
| fill        | String    | fill                    | 'none'           |
| stroke      | String    | stroke                  | '#231f20'        |
| strokeWidth | String    | strokeWidth             | '8'              |

## Usage example in your component:

```
<Spinner
  svgClass="spinner_svg"
  svgPath="spinner_path"
  strokeWidth="8"
  w="auto"
  h="100vh"
  stroke="#FFD662"
/>
```
