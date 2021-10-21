import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { VideoAd } from 'react-native-super-awesome';

export default function App() {
  const play = async () => {
    await VideoAd.play(74790);
  };

  React.useEffect(() => {
    VideoAd.disableCloseButton();
    VideoAd.disableCloseAtEnd();
    VideoAd.disableParentalGate();
    VideoAd.enableBumperPage();
    VideoAd.enableParentalGate();
    VideoAd.enableSmallClickButton();
    VideoAd.enableTestMode();
    VideoAd.load(74790);
    play();
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
