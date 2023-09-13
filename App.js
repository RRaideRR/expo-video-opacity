import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

export default function App() {
  const [opacity, setOpacity] = useState(1);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Video
          source={require('./assets/lake.mp4')}
          style={{width: '100%', height: '100%', opacity: opacity}}
          shouldPlay={true}
          isLooping
          resizeMode={ResizeMode.COVER}
        />
      </View>
      <Button title={"Click me to toggle opacity"} onPress={() => setOpacity(opacity === 1 ? 0.50 : 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
});
