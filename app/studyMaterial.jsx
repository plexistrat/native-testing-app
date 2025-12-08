import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
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
          {/* <MaterialCommunityIcons
            name="guitar-electric"
            size={60}
            color="#4A90E2"
            style={{ marginBottom: 15 }}
          /> */}
          <Image
            source={require("../assets/logo1.png")}
            style={styles.appLogo}
            resizeMode="contain"
          />

          {/* <Text style={styles.title}>Guitar Study Hub</Text> */}
          <Text style={styles.subtitle}>
            Your pathway through the electric guitar grades
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
            color="#4A90E2"
            style={styles.bannerIcon}
          />
          <Text style={styles.bannerText}>
            “Small steps daily create unstoppable players.”
          </Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
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
    paddingBottom: 120,
  },

  /* --- Orbs --- */
  orb1: {
    position: "absolute",
    top: 110,
    right: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(74, 144, 226, 0.15)",
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(64, 128, 201, 0.18)",
  },

  /* --- Header --- */
  headerContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  appLogo: {
    width: 120,
    height: 120,
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#DEE3E4",
    letterSpacing: 1.4,
    textShadowColor: "rgba(74, 144, 226, 0.35)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#BFC4C6",
    marginTop: 6,
    marginBottom: 12,
    opacity: 0.85,
    textAlign: "center",
  },

  titleUnderline: {
    marginTop: 10,
    width: 95,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#4A90E2",
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
    backgroundColor: "rgba(36, 40, 48, 0.65)",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.45)",
  },

  bannerIcon: {
    marginRight: 14,
  },

  bannerText: {
    color: "#DEE3E4",
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },

  backButton: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,

    backgroundColor: "rgba(74, 144, 226, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.35)",

    shadowColor: "#4A90E2",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  backButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#4A90E2",
  },
});
