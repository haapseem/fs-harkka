import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Application} from "~/application";

export default function App() {
  let x = new Application();
  return (
    <View style={styles.container}>
      <Text>{x.foo()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
