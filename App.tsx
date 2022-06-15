import { StyleSheet, Text, View } from 'react-native';

import Commons from './src/components/Commons';

export default function App() {
  return (
    <View style={styles.container}>
      <Commons/>
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
