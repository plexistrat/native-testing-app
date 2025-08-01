import { StyleSheet, Text, View, ScrollView } from "react-native";
import GradeComponents from "./components/GradeComponents";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function grade1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <GradeComponents title="Scales" />
          <GradeComponents title="Chords" />
          <GradeComponents title="RhythmGuitar" />
          <GradeComponents title="LeadGuitar" />
          <GradeComponents title="SpokenTests" />
          <GradeComponents title="AuralTests" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              For more details go to
              <Link href="/listenExamples" style={{ color: "#DEE3E4" }}>
                <Text> Listen examples</Text>
              </Link>
              .
            </Text>
            <Text style={styles.title}>
              There you can find many audio examples
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
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
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
    marginTop: 20,
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
