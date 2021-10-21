import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { SAEvent, VideoAd } from 'react-native-super-awesome';

export default function App() {
  React.useEffect(() => {
    VideoAd.disableCloseButton();
    VideoAd.disableCloseAtEnd();
    VideoAd.disableParentalGate();
    VideoAd.enableBumperPage();
    VideoAd.enableParentalGate();
    VideoAd.enableSmallClickButton();
    VideoAd.enableTestMode();
    VideoAd.load(74790);
    VideoAd.setCallback().then((result: SAEvent) => {
      if (result === SAEvent.adLoaded) {
        VideoAd.play(74790);
      }
    });
  }, []);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
