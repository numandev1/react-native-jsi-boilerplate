# react-native-jsi-boilerplate

<p align="center">
<img src="/assets/boilerplateIcon.png" width="150"/>
</p>

<p align="center">
  <img width="300" src="/assets/demo.png?raw=true">
</p>

This is just a boilerplate of JSI

## Prerequisites
You must have Android NDK and CMake installed on android to build the library.

## Methods
The following methods are implemented.

## Usage

```js
import JsiBoilerplate from 'react-native-jsi-boilerplate';

// ...

let helloWorld = JsiBoilerplate.helloWorld();

//...

let multipleResult = JsiBoilerplate.multiply(5, 6);

//...

JsiBoilerplate.multiplyWithCallback(5, 6, result => { });

//...

const deviceName = JsiBoilerplate.getDeviceName();

//...

JsiBoilerplate.setItem('test', 'test value');

//...

const result = JsiBoilerplate.getItem('test');
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
