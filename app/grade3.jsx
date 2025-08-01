import { StyleSheet, Text, View, ScrollView } from "react-native";
import GradeComponents from "./components/GradeComponents";
import { SafeAreaView } from "react-native-safe-area-context";
export default function grade1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Coming Soon</Text>
          {/* <GradeComponents title="Scales" />
          <GradeComponents title="Chords" />
          <GradeComponents title="RhythmGuitar" />
          <GradeComponents title="LeadGuitar" />
          <GradeComponents title="SpokenTests" />
          <GradeComponents title="AuralTests" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 1000,
    backgroundColor: "#212529",
  },
  titleContainer: {
    alignItems: "center",
    borderColor: "#20c997",
    borderRadius: 20,
    borderWidth: 2,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 30,
    textAlign: "center",
    color: "#20c997",
  },
  chordsContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 1000,
  },
  tap1: {
    fontSize: 16,
    color: "#DEE3E4",
    marginRight: 200,
  },
  tap2: {
    width: 100,
    fontSize: 16,
    color: "#DEE3E4",
    marginRight: 250,
  },
});
