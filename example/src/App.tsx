import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SuperAwesomeView } from 'react-native-super-awesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
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
});
