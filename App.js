import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
const logoImge = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Declan Irakoze!</Text>
      <StatusBar style="light" />
      {/*<Image source={logoImge} style={{width: 300, height: 300}} />/>
      <Image
        source={{uri: "https://picsum.photos/300"}}
          style={{width: 300, height: 300}}
          />*/}
          <ImageBackground source= {logoImge} style={{ flex: 1 }}>
          <Text>IMAGE TEXT </Text>
          </ImageBackground>

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