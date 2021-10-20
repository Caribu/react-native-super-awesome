import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  NativeModules,
} from 'react-native';
import { SuperAwesomeView } from 'react-native-super-awesome';

const IS_ANDROID = Platform.OS === 'android';

export default function App() {
  console.log(' NativeModules.AwesomeAdsView', NativeModules);

  const loadAd = () => {
    if (!IS_ANDROID) return;
    const callbackSuccess = () => console.log('ad loaded');
    const callbackError = () => console.log('ad error');
    NativeModules.AwesomeAdsView.loadAd(callbackSuccess, callbackError);
  };

  const playAd = () => {
    if (!IS_ANDROID) return;
    const callbackSuccess = () => console.log('ad loaded');
    const callbackError = () => console.log('ad error');
    NativeModules.AwesomeAdsView.play(callbackSuccess, callbackError);
  };

  const enableTestMode = () => {
    if (!IS_ANDROID) return;
    NativeModules.AwesomeAdsView.enableTestMode();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => enableTestMode()} style={styles.button}>
        <Text>enableTestMode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => loadAd()} style={styles.button}>
        <Text>LOAD AD</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playAd()} style={styles.button}>
        <Text>PLAY AD</Text>
      </TouchableOpacity>

      <SuperAwesomeView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 15,
  },
});
