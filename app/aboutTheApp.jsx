import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function about() {
  const router = useRouter();

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
            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>About the App</Text>
              <View style={styles.divider} />

              <Text style={styles.subtitle}>
                The complete beginner’s guide to the RGT Electric Guitar Grades.
              </Text>
            </View>

            {/* Main Content */}
            <View style={styles.contentSection}>
              <Text style={styles.paragraph}>
                This app is designed as your personal companion for the{" "}
                <Text style={styles.boldText}>
                  RGT Electric Guitar Syllabus
                </Text>
                . It focuses specifically on the{" "}
                <Text style={styles.boldText}>
                  beginner grades — Grade 1, Grade 2, and Grade 3
                </Text>
                , all of which are{" "}
                <Text style={styles.boldTextHighlight}>
                  completely free to access
                </Text>
                .
              </Text>

              <Text style={styles.paragraph}>
                These early levels form the foundation of clean technique,
                musical understanding, and confident performance. Once you're
                ready to move forward, you will have the option to unlock the
                advanced grades (4–8), which cover more demanding skills,
                musicianship, and full exam preparation.
              </Text>

              {/* Features List */}
              <View style={styles.featuresContainer}>
                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Explore structured lessons for Grades 1–3
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Learn scales, chords, arpeggios, rhythms and aural tests
                    with clean visuals
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Strengthen beginner technique step by step
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Use backing tracks and play-along tools to build confidence
                  </Text>
                </View>
              </View>

              {/* Closing Section */}
              <View style={styles.closingSection}>
                <Text style={styles.paragraph}>
                  Every guitarist deserves a strong start — that’s why the
                  beginner content is free. As you grow, premium grades unlock a
                  deeper musical journey, helping you develop the skills needed
                  for advanced playing and performance.
                </Text>

                <View style={styles.mottoContainer}>
                  <Text style={styles.motto}>Learn. Play. Progress.</Text>
                  <Text style={styles.motto2}>Your journey starts here.</Text>
                  <View style={styles.mottoUnderline} />
                </View>
              </View>
            </View>

            {/* Guitar Icon */}
            <View style={styles.guitarIcon}>
              <Text style={styles.guitarEmoji}>🎸</Text>
            </View>
            {/* Back Button */}

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    minHeight: 1000,
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
    marginBottom: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(32, 201, 151, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: "#20c997",
    borderRadius: 2,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#20c997",
    textAlign: "center",
    lineHeight: 26,
    fontStyle: "italic",
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
    marginBottom: 28,
    opacity: 0.9,
  },
  boldText: {
    fontWeight: "bold",
    color: "#20c997",
  },
  boldTextHighlight: {
    fontWeight: "bold",
    color: "#4ddbb0",
  },

  /* Features List */
  featuresContainer: {
    width: "100%",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "rgba(32, 201, 151, 0.08)",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#20c997",
  },
  bulletPoint: {
    width: 8,
    height: 8,
    backgroundColor: "#20c997",
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
    marginTop: 20,
  },
  mottoContainer: {
    alignItems: "center",
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "rgba(222, 227, 228, 0.05)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(32, 201, 151, 0.3)",
  },
  motto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#20c997",
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
    backgroundColor: "#20c997",
    borderRadius: 2,
    marginTop: 10,
  },

  /* Guitar Icon */
  guitarIcon: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "rgba(32, 201, 151, 0.15)",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "rgba(32, 201, 151, 0.3)",
  },
  guitarEmoji: {
    fontSize: 40,
    textAlign: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "rgba(32, 201, 151, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.3)",
    marginBottom: 20,
    marginLeft: 5,
  },

  backButtonText: {
    fontSize: 16,
    color: "#20c997",
    fontWeight: "600",
  },
});
