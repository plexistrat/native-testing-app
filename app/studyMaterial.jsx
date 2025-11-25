import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradeCard from "./components/GradeCard";

const studyMaterial = () => {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={styles.scrollContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Animated background orbs */}
        <View style={styles.orb1} />
        <View style={styles.orb2} />

        {/* Header with gradient text effect */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Study Material</Text>
          <View style={styles.titleUnderline} />
        </View>

        {/* Content card with enhanced glass effect */}
        <View style={styles.gradeContainer}>
          <View style={styles.shimmerOverlay} />
          <GradeCard title="Grade 1" grade="grade1" />
          <GradeCard title="Grade 2" grade="grade2" />
          <GradeCard title="Grade 3" grade="grade3" />
          <GradeCard title="Grade 4" grade="grade4" />
          <GradeCard title="Grade 5" grade="grade5" />
          <GradeCard title="Grade 6" grade="grade6" />
          <GradeCard title="Grade 7" grade="grade7" />
          <GradeCard title="Grade 8" grade="grade8" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default studyMaterial;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 80,
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
  headerContainer: {
    marginBottom: 45,
    alignItems: "center",
  },
  title: {
    fontSize: 46,
    fontWeight: "900",
    color: "#f5f7f8",
    letterSpacing: 1.5,
    textShadowColor: "rgba(99, 102, 241, 0.3)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 12,
  },
  titleUnderline: {
    marginTop: 12,
    width: 80,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#20c997",
    shadowColor: "#20c997",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  gradeContainer: {
    width: "100%",
    alignItems: "center",
    gap: 14,
  },
});
