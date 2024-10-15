import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
    <View style={styles.container}>
      {/* Box text is passed to the children prop and backgroundColor the style prop, which will be merged with styles.box in Box.js */}
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 300,
    // flexWrap: "wrap",
    // rowGap: 20,
    // columnGap: 30,
    // gap: 10,
    // alignContent: "space-around",
    // justifyContent: "space-around",
    // flexDirection: "row",
    // alignItems: "flex-start",
    // width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
