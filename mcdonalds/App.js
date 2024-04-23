import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Popular from './src/components/Popular';
import { COLORS } from './constants';

export default function App() {
  return (
    <View style={styles.CustomContainer}>
      <Header />
      <Categories />
      <Popular />
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
  CustomContainer :{
    padding : 30,
    paddingTop : 70,
    backgroundColor : COLORS.black,
    height: '100%'
  }
});
