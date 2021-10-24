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
import VideoAds from './VideoAds';

const IS_ANDROID = Platform.OS === 'android';

export default function App() {
  React.useEffect(() => {
    VideoAds.addEventListener((test: any) => {
      console.log('TEST', test);
    });
  }, []);

  const loadAd = () => {
    if (!IS_ANDROID) return;
    VideoAds.load(30479);
  };

  const playAd = () => {
    if (!IS_ANDROID) return;
    VideoAds.play(30479);
  };

  const enableTestMode = () => {
    if (!IS_ANDROID) return;
    VideoAds.enableTestMode();
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
