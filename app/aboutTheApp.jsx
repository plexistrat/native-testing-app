import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./components/BackButton";

export default function About() {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={styles.scrollContainer}
    >
      <ScrollView>
        <SafeAreaView>
          {/* Floating gradient orbs */}
          <View style={styles.orb1} />
          <View style={styles.orb2} />

          <View style={styles.container}>
            {/* Logo */}
            <Image
              source={require("../assets/logo1.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>Guitar Study Hub</Text>
              <View style={styles.divider} />

              <Text style={styles.subtitle}>
                Your complete starting point for Electric Guitar Grades.
              </Text>
            </View>

            {/* Main Content */}
            <View style={styles.contentSection}>
              <Text style={styles.paragraph}>
                <Text style={styles.boldText}>Guitar Study Hub</Text> is your
                personal guide through the{" "}
                <Text style={styles.boldText}>Electric Guitar Grades</Text>{" "}
                system. The app focuses on the essential foundation levels —
                <Text style={styles.boldText}> Grades 1, 2, and 3</Text> — all
                of which are{" "}
                <Text style={styles.boldTextHighlight}>free to explore</Text>.
              </Text>

              <Text style={styles.paragraph}>
                These beginner levels help you develop clean technique, musical
                accuracy, and confidence. When you're ready, you can unlock
                Grades 4–8 for more advanced playing, musicianship, and exam
                preparation.
              </Text>

              {/* Features List */}
              <View style={styles.featuresContainer}>
                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Structured lessons for Grades 1–3
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Clear visuals for scales, chords, arpeggios & rhythms
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Step-by-step development for beginner technique
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Backing tracks & play-along tools to grow confidence
                  </Text>
                </View>
              </View>

              {/* Closing Section */}
              <View style={styles.closingSection}>
                <Text style={styles.paragraph}>
                  Every guitarist deserves a strong start — that’s why the
                  beginner content is free. When you feel ready, the premium
                  grades unlock a deeper musical journey and more advanced
                  skills.
                </Text>

                <View style={styles.mottoContainer}>
                  <Text style={styles.motto}>Learn. Play. Progress.</Text>
                  <Text style={styles.motto2}>Your journey starts here.</Text>
                  <View style={styles.mottoUnderline} />
                </View>
              </View>
            </View>
          </View>
          <BackButton />
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

/* ------------------- STYLES ------------------- */

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },

  container: {
    alignItems: "center",
    paddingHorizontal: 22,
  },

  /* Logo */
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    opacity: 0.95,
  },

  /* Background Orbs */
  orb1: {
    position: "absolute",
    top: 80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(99, 102, 241, 0.15)",
    opacity: 0.6,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 60,
  },
  orb2: {
    position: "absolute",
    bottom: 100,
    left: -70,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(168, 85, 247, 0.12)",
    opacity: 0.45,
    shadowColor: "#a855f7",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 70,
  },

  /* Header */
  headerSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(32, 201, 151, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  divider: {
    width: 70,
    height: 4,
    backgroundColor: "#4A90E2",
    borderRadius: 2,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A90E2",
    textAlign: "center",
    lineHeight: 24,
    fontStyle: "italic",
    maxWidth: 320,
  },

  /* Content */
  contentSection: {
    width: "100%",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
    opacity: 0.9,
  },
  boldText: {
    fontWeight: "bold",
    color: "#4A90E2",
  },
  boldTextHighlight: {
    fontWeight: "bold",
    color: "#4A90E2",
  },

  /* Features List */
  featuresContainer: {
    width: "100%",
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "rgba(32, 173, 201, 0.08)",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4A90E2",
  },
  bulletPoint: {
    width: 8,
    height: 8,
    backgroundColor: "#4A90E2",
    borderRadius: 4,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DEE3E4",
    lineHeight: 22,
    flex: 1,
  },

  /* Closing Section */
  closingSection: {
    alignItems: "center",
    marginTop: 10,
  },
  mottoContainer: {
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "rgba(222, 227, 228, 0.05)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(32, 164, 201, 0.3)",
  },
  motto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
    letterSpacing: 1,
  },
  motto2: {
    fontSize: 16,
    marginTop: 8,
    color: "#DEE3E4",
    opacity: 0.9,
    fontStyle: "italic",
  },
  mottoUnderline: {
    width: 120,
    height: 3,
    backgroundColor: "#4A90E2",
    borderRadius: 2,
    marginTop: 10,
  },
});
