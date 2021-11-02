import { NativeEventEmitter, NativeModules } from 'react-native';

const { VideoAd } = NativeModules;

const availableFunctions = {
  disableBackButton: '',
  disableBumperPage: '',
  disableCloseAtEnd: '',
  disableCloseButton: '',
  disableMoatLimiting: '',
  disableParentalGate: '',
  disableSmallClickButton: '',
  disableTestMode: '',
  enableBackButton: '',
  enableBumperPage: '',
  enableCloseAtEnd: '',
  enableCloseButton: '',
  enableCloseButtonWithWarning: '',
  enableParentalGate: '',
  enableSmallClickButton: '',
  enableTestMode: '',
  getIsBackButtonEnabled: '',
  getIsBumperPageEnabled: '',
  getIsParentalGateEnabled: '',
  getIsTestEnabled: '',
  getListener: '',
  getMoatLimitingState: '',
  getOrientation: '',
  getShouldAutomaticallyCloseAtEnd: '',
  getShouldShowCloseButton: '',
  getShouldShowSmallClickButton: '',
  load: '',
  play: '',
  removeAd: '',
  setBackButton: '',
  setBumperPage: '',
  setCloseAtEnd: '',
  setCloseButton: '',
  setCloseButtonWarning: '',
  setConfigurationDev: '',
  setConfigurationProduction: '',
  setConfigurationStaging: '',
  setListener: '',
  setOrientation: '',
  setOrientationAny: '',
  setOrientationLandscape: '',
  setOrientationPortrait: '',
  setParentalGate: '',
  setSmallClick: '',
  setTestMode: '',
  getConstants: '',
};

let onEventHandler = (event: any) => {};

const eventEmitter = new NativeEventEmitter(VideoAd);
eventEmitter.addListener('AwesomeAdsVideoEvent', (event) => {
  onEventHandler(event);
});

// export default {
//   ...VideoAdFunctions,
//   addEventListener: (cb) => {
//     onEventHandler = cb;
//   },
// };

class VideoAds {
  addEventListener = (cb) => {
    onEventHandler = cb;
  };
}

const VideoAdFunctions: {
  [Property in keyof typeof availableFunctions]: Function;
} = {};

Object.keys(availableFunctions).forEach((funcName) => {
  const fn = (...args: any) => VideoAd[funcName](...args);
  VideoAdFunctions[funcName] = fn;
  VideoAds[funcName] = fn;
});

export default new VideoAds();
