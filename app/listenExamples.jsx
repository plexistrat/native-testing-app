import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import YouTubePlayer from "./components/YouTubePlayer";
import BackButton from "./components/BackButton";

const ListenExamples = () => {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.wrapper}>
            {/* ORBS — MATCHED TO INDEX */}
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.container}>
              {/* TITLE */}
              <Image
                source={require("../assets/logo1.png")}
                style={styles.appLogo}
                resizeMode="contain"
              />
              <Text style={styles.title}>🎧 Listening Examples</Text>

              {/* INTRO CARD */}
              <View style={styles.introCard}>
                <Text style={styles.introText}>
                  Explore demonstration performances for rhythm, lead, and aural
                  content across the guitar grades.
                </Text>
              </View>

              {/* FEATURES */}
              <View style={styles.featuresSection}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎸</Text>
                  <Text style={styles.featureText}>
                    Hear how the exam material should sound
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎵</Text>
                  <Text style={styles.featureText}>
                    Rhythm & lead examples from Grades 1–3
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎯</Text>
                  <Text style={styles.featureText}>
                    Improve timing, tone and accuracy
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🧠</Text>
                  <Text style={styles.featureText}>
                    Understand exam expectations through sound
                  </Text>
                </View>
              </View>

              {/* VIDEOS */}
              <YouTubePlayer
                videoId="Aqoq2QR_NrI"
                title="Grade 1 – Rhythm Guitar Example"
              />

              <YouTubePlayer
                videoId="oxAFo-JTJus"
                title="Grade 1 – Rhythm Guitar Example"
              />

              {/* CTA */}
              <View style={styles.ctaContainer}>
                <Text style={styles.ctaSubtitle}>
                  More examples available on YouTube
                </Text>

                <Link
                  href="https://www.youtube.com/watch?v=9zfKh_Pm8T4"
                  style={styles.ctaButton}
                >
                  <Text style={styles.ctaButtonText}>Visit Channel</Text>
                </Link>
              </View>
            </View>

            <BackButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ListenExamples;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  wrapper: {
    position: "relative",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  /* ORBS – INDEX MATCH */
  orb1: {
    position: "absolute",
    top: 100,
    right: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(64, 128, 201, 0.32)",
    shadowColor: "#4A90E2",
    shadowRadius: 60,
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(74, 144, 226, 0.15)",
  },

  /* TITLE */
  appLogo: {
    width: 120,
    height: 120,
    marginLeft: 125,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1,
    textShadowColor: "rgba(32, 201, 151, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },

  /* INTRO CARD */
  introCard: {
    backgroundColor: "rgba(33, 37, 41, 0.7)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.45)",
    marginBottom: 25,
  },
  introText: {
    fontSize: 17,
    color: "#DEE3E4",
    textAlign: "center",
    lineHeight: 24,
  },

  /* FEATURES */
  featuresSection: {
    marginBottom: 25,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(222, 227, 228, 0.06)",
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#4A90E2",
    marginBottom: 10,
  },
  featureIcon: {
    fontSize: 26,
    width: 32,
    marginRight: 14,
  },
  featureText: {
    fontSize: 16,
    color: "#DEE3E4",
    lineHeight: 22,
    flex: 1,
  },

  /* CTA */
  ctaContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: "#DEE3E4",
    marginBottom: 12,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#ed4242",
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  ctaButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
