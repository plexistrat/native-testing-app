import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradeComponents from "./components/GradeComponents";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function grade3() {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.wrapper}>
            {/* Animated background orbs */}
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.container}>
              <GradeComponents title="Scales" num="3" />
              <GradeComponents title="Chords" num="3" />
              <GradeComponents title="RhythmGuitar" num="3" />
              <GradeComponents title="LeadGuitar" num="3" />
              <GradeComponents title="SpokenTests" num="3" />
              <GradeComponents title="AuralTests" num="3" />
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  wrapper: {
    position: "relative",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 1000,
  },
  // Floating background orbs for depth
  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(99, 102, 241, 0.15)",
    opacity: 0.6,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 60,
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(168, 85, 247, 0.12)",
    opacity: 0.5,
    shadowColor: "#a855f7",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 70,
  },
  titleContainer: {
    alignItems: "center",
    borderColor: "#20c997",
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 20,
    backgroundColor: "rgba(33, 37, 41, 0.6)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  chordsContainer: {
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
