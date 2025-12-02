import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradeCard from "./components/GradeCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const StudyMaterial = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={styles.scrollContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Background orbs */}
        <View style={styles.orb1} />
        <View style={styles.orb2} />

        {/* Header */}
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            name="guitar-electric"
            size={60}
            color="#20c997"
            style={{ marginBottom: 15 }}
          />

          <Text style={styles.title}>Guitar Study Hub</Text>
          <Text style={styles.subtitle}>
            Your pathway through the guitar grades{" "}
          </Text>

          <View style={styles.titleUnderline} />
        </View>

        {/* Grade Cards */}
        <View style={styles.gradeContainer}>
          <GradeCard title="Grade 1" grade="grade1" />
          <GradeCard title="Grade 2" grade="grade2" />
          <GradeCard title="Grade 3" grade="grade3" />
        </View>

        {/* Bottom Banner */}
        <View style={styles.bottomBanner}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={28}
            color="#20c997"
            style={styles.bannerIcon}
          />
          <Text style={styles.bannerText}>
            “Small steps daily create unstoppable players.”
          </Text>
        </View>
        <View>
          {/* Back Button - fixed bottom-left */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default StudyMaterial;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,
  },

  /* --- Orbs --- */
  orb1: {
    position: "absolute",
    top: 120,
    right: -40,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(99, 102, 241, 0.18)",
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(168, 85, 247, 0.15)",
  },

  /* --- Header --- */
  headerContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#f5f7f8",
    letterSpacing: 1.5,
    textShadowColor: "rgba(32, 201, 151, 0.3)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#cfd2d3",
    marginTop: 6,
    marginBottom: 12,
    opacity: 0.9,
  },

  titleUnderline: {
    marginTop: 10,
    width: 100,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#20c997",
  },

  /* --- Cards Container --- */
  gradeContainer: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },

  /* --- Bottom banner --- */
  bottomBanner: {
    marginTop: 50,
    backgroundColor: "rgba(33, 37, 41, 0.7)",
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#20c997",
  },

  bannerIcon: {
    marginRight: 14,
  },

  bannerText: {
    color: "#f5f7f8",
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },
  backButton: {
    position: "absolute",
    bottom: -80,
    left: -170,

    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,

    backgroundColor: "rgba(32, 201, 151, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.3)",

    shadowColor: "#20c997",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  backButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#20c997",
  },
});
