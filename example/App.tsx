import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Dimensions} from 'react-native';
import JsiBoilerplate from 'react-native-jsi-boilerplate';
const {width, height} = Dimensions.get('screen');

function App() {
  const [log, setLog] = useState();

  const makeLog = (obj: any) => {
    let logStr: string = '';
    for (let [key, value] of Object.entries(obj)) {
      logStr += `\n\n${key} : ${value}`;
    }
    setLog(logStr);
  };

  const onInvokeHelloWorld = () => {
    let perf = performance.now();
    let helloWorld = JsiBoilerplate.helloWorld();
    const performanceResult = performance.now() - perf;
    makeLog({
      performance: performanceResult,
      helloWorld,
    });
  };

  const onInvokeMultiply = () => {
    let perf = performance.now();
    let multipleResult = JsiBoilerplate.multiply(5, 6);
    const performanceResult = performance.now() - perf;
    makeLog({
      performance: performanceResult,
      multipleResult,
    });
  };

  const onInvokeMultiplyWithCallback = () => {
    let perf = performance.now();
    JsiBoilerplate.multiplyWithCallback(5, 6, result => {
      const performanceResult = performance.now() - perf;
      makeLog({
        performance: performanceResult,
        result,
      });
    });
  };

  const onGetDeviceModal = () => {
    let perf = performance.now();
    const deviceName = JsiBoilerplate.getDeviceName();
    const performanceResult = performance.now() - perf;
    makeLog({
      performance: performanceResult,
      deviceName,
    });
  };

  const onSetItemInvoke = () => {
    let perf = performance.now();
    JsiBoilerplate.setItem('test', 'test value');
    const performanceResult = performance.now() - perf;
    makeLog({
      performance: performanceResult,
      saved: 'true',
    });
  };

  const onGetItemInvoke = () => {
    let perf = performance.now();
    const result = JsiBoilerplate.getItem('test');
    const performanceResult = performance.now() - perf;
    makeLog({
      performance: performanceResult,
      test: result,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>{log}</Text>
      <Button title="call hello world function" onPress={onInvokeHelloWorld} />
      <Button title="call multiply function" onPress={onInvokeMultiply} />
      <Button
        title="call multiply with callback function"
        onPress={onInvokeMultiplyWithCallback}
      />
      <Button title="Get Device Name" onPress={onGetDeviceModal} />
      <Button title="set Item function" onPress={onSetItemInvoke} />
      <Button title="Get Item function" onPress={onGetItemInvoke} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    marginTop: 50,
    marginBottom: 15,
    height: height * 0.4,
    width: width * 0.9,
    borderColor: 'gray',
    borderWidth: 5,
    fontSize: 20,
    padding: 15,
  },
});
