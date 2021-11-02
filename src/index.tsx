import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const eventEmitter = new NativeEventEmitter(NativeModules.VideoAd);

const LINKING_ERROR =
  `The package 'react-native-super-awesome' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export enum SAEvent {
  adLoaded = 0,
  adEmpty = 1,
  adFailedToLoad = 2,
  adAlreadyLoaded = 3,
  adShown = 4,
  adFailedToShow = 5,
  adClicked = 6,
  adEnded = 7,
  adClosed = 8,
}

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
  hasAdAvailable: (placementId: Number) => any;
  setCallback: (callback: any) => any;
  setConfigurationProduction: () => void;
  setConfigurationStaging: () => void;
  setOrientationAny: () => void;
  setOrientationLandscape: () => void;
  setOrientationPortrait: () => void;
  load: (placementId: Number) => void;
  play: (placementId: Number) => void;
};

export const VideoAd: VideoAdProps = NativeModules.VideoAd
  ? {
      ...NativeModules.VideoAd,
      setCallback: (cb: any) => {
        eventEmitter.addListener('AwesomeAdsVideoEvent', cb);
      },
    }
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );
