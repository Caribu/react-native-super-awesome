import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { SuperAwesomeView, VideoAd } from 'react-native-super-awesome';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const play = async () => {
    console.log('JS play begin');
    await VideoAd.play(74790);
    console.log('JS play end');
  };

  React.useEffect(() => {
    VideoAd.multiply(3, 7).then(setResult);
    console.log('entrou aqui');
    console.log('VideoAd:');
    console.log(VideoAd);

    VideoAd.enableTestMode();
    VideoAd.enableBumperPage();
    VideoAd.enableSmallClickButton();
    VideoAd.load(74790);
    play();
  }, []);

  React.useEffect(() => {
    console.log('result effect');
    console.log(result);
  }, [result]);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
