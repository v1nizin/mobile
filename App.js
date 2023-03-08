// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Couter from './src/components/Couter';

export default function App() {
  return (
    <View style={styles.container}>
      <Couter min="10"/> 
      <Couter min="1"/>
      <Couter />
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
