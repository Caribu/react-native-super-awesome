import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-super-awesome' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type VideoAdProps = {
  disableBumperPage: () => void;
  disableCloseAtEnd: () => void;
  disableCloseButton: () => void;
  disableSmallClickButton: () => void;
  disableParentalGate: () => void;
  disableTestMode: () => void;
  enableBumperPage: () => void;
  enableCloseAtEnd: () => void;
  enableCloseButton: () => void;
  enableSmallClickButton: () => void;
  enableParentalGate: () => void;
  enableTestMode: () => void;
  setConfigurationProduction: () => void;
  setConfigurationStaging: () => void;
  setOrientationAny: () => void;
  setOrientationLandscape: () => void;
  setOrientationPortrait: () => void;
  load: (placementId: Number) => void;
  play: (placementId: Number) => void;
};

export const VideoAd: VideoAdProps = NativeModules.VideoAd
  ? NativeModules.VideoAd
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );
