import { NativeModules } from 'react-native';

function isLoaded() {
  return typeof global?.helloWorld === 'function';
}

if (!isLoaded()) {
  const result = NativeModules.JsiBoilerplate.install();
  if (!result) {
    throw new Error(
      'JSI bindings were not installed for: JsiBoilerplate Module'
    );
  }

  if (!isLoaded()) {
    throw new Error(
      'JSI bindings were not installed for: JsiBoilerplate Module'
    );
  }
}

//@ts-ignore
let JsiBoilerplateModule: {
  helloWorld(): string;
  multiply(x: number, y: number): number;
  multiplyWithCallback(
    x: number,
    y: number,
    callback: (z: number) => void
  ): void;
  getDeviceName(): string;
  setItem(key: string, value: string): boolean;
  getItem(key: string): string;
} = global;

export default JsiBoilerplateModule;
