import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { SAEvent, VideoAd } from 'react-native-super-awesome';

export default function App() {
  React.useEffect(() => {
    VideoAd.setCallback(onAdEvent);
    VideoAd.disableCloseButton();
    VideoAd.disableCloseAtEnd();
    VideoAd.disableParentalGate();
    VideoAd.enableBumperPage();
    VideoAd.enableParentalGate();
    VideoAd.enableSmallClickButton();
    VideoAd.enableTestMode();
    setTimeout(() => {
      VideoAd.load(74790);
    }, 200);

    // VideoAds.addEventListener((test: any) => {
    //   console.log('TEST', test);
    // });
  }, []);

  const onAdEvent = (event: SAEvent) => {
    console.log('on event', event);
    if (event === SAEvent.adLoaded) {
      VideoAd.play(74790);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="load" onPress={() => VideoAd.load(74790)} />
      <Button title="play" onPress={() => VideoAd.play(74790)} />
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
