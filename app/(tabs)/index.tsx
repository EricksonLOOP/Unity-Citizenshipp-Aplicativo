
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
const Style = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "flex-end"
  },
  navBar: {
    height: 100,
    width: "100%",
    backgroundColor: "blue"
  }
})

export default function HomeScreen() {
  return (
    <View style={Style.container}>
      <View style={Style.navBar}>

      </View>

    </View>
  );
}

