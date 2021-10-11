import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-super-awesome' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type SuperAwesomeProps = {
  // color: string;
  // style: ViewStyle;
};

const ComponentName = 'SuperAwesomeView';

export const SuperAwesomeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SuperAwesomeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
