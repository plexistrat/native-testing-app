import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FloatingNotesBackground = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Background */}
        <View style={styles.background} />

        {/* Children content */}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#212529", // Dark background color
  },
  content: {
    flex: 1,
    zIndex: 10,
  },
});

export default FloatingNotesBackground;
