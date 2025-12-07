import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Enable animation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AllTheGrades = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    LayoutAnimation.easeInEaseOut();
    setCollapsed(!collapsed);
  };

  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={styles.scrollContainer}
    >
      <ScrollView>
        <SafeAreaView>
          {/* Background orbs */}
          <View style={styles.orb1} />
          <View style={styles.orb2} />

          <View style={styles.container}>
            {/* Main Title */}
            <Text style={styles.mainTitle}>Electric Guitar Grades</Text>
            <Text style={styles.subtitle}>Overview & Skills Breakdown</Text>

            {/* Intro */}
            <View style={styles.introSection}>
              <Text style={styles.description}>
                This guide gives a clear overview of what guitarists learn and
                are tested on throughout Grades 1 to 8. Use it to understand the
                journey and prepare with confidence.
              </Text>
            </View>

            {/* ✔ NEW COLLAPSIBLE SECTION */}
            <View style={styles.section}>
              <TouchableOpacity
                onPress={toggleCollapse}
                style={styles.collapseHeader}
              >
                <Text style={styles.collapseTitle}>
                  🎸 What to Expect in Each Exam
                </Text>
                <Text style={styles.collapseIndicator}>
                  {collapsed ? "▼" : "▲"}
                </Text>
              </TouchableOpacity>

              {!collapsed && (
                <View style={styles.collapseBody}>
                  <Text style={styles.collapseText}>
                    • Perform the required scales, arpeggios, and chord shapes
                    for your grade.
                  </Text>

                  <Text style={styles.collapseText}>
                    • Play rhythm guitar to set examples using a variety of time
                    signatures (4/4, 3/4, 6/8, 5/4), demonstrating accuracy and
                    steady timing.
                  </Text>

                  <Text style={styles.collapseText}>
                    • Perform a lead section over a given chord progression,
                    showing phrasing, tone control, and musical expression.
                  </Text>

                  <Text style={styles.collapseText}>
                    • Answer spoken musical knowledge questions covering the
                    guitar, basic theory, tone shaping, common effect pedals,
                    and general musicianship.
                  </Text>

                  <Text style={styles.collapseText}>
                    • Complete a short ear-training test, including rhythm
                    recognition, pitch comparison, and interval or chord
                    identification (depending on grade).
                  </Text>
                </View>
              )}
            </View>

            {/* Core exam components */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Core Skills in All Grades</Text>

              <View style={styles.componentsGrid}>
                {[
                  "Scales & Arpeggios",
                  "Chords",
                  "Rhythm Playing",
                  "Lead Playing",
                  "Spoken Test",
                  "Aural Assessment",
                  "Specialism (Grades 6–8)",
                ].map((item, index) => (
                  <View key={index} style={styles.componentItem}>
                    {/* <Text style={styles.componentEmoji}>🎵</Text> */}
                    <Text style={styles.componentText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Grade Cards */}
            <View style={styles.section}>
              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 1–3 (Beginner)</Text>
                <Text style={styles.gradePoint}>
                  • Basic scales, chords, rhythms
                </Text>
                <Text style={styles.gradePoint}>
                  • Simple solos and patterns
                </Text>
                <Text style={styles.gradePoint}>
                  • Intro-level spoken & aural tests
                </Text>
                <Text style={styles.focusText}>
                  Focus: Build fundamentals & confidence
                </Text>
              </View>

              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 4–5 (Intermediate)</Text>
                <Text style={styles.gradePoint}>
                  • Extended scales & arpeggios
                </Text>
                <Text style={styles.gradePoint}>
                  • More advanced chords & rhythms
                </Text>
                <Text style={styles.gradePoint}>
                  • Melodic soloing & phrasing
                </Text>
                <Text style={styles.focusText}>
                  Focus: Accuracy, control, musicality
                </Text>
              </View>

              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 6–8 (Advanced)</Text>
                <Text style={styles.gradePoint}>
                  • Full fretboard fluency & modes
                </Text>
                <Text style={styles.gradePoint}>
                  • Complex rhythms & stylistic work
                </Text>
                <Text style={styles.gradePoint}>
                  • Advanced techniques (tapping, slides, etc.)
                </Text>
                <Text style={styles.focusText}>
                  Focus: Expression, mastery, style identity
                </Text>
              </View>
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
};

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  container: { padding: 20, paddingTop: 10 },

  /* Background orbs */
  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(99, 101, 241, 0.31)",
    shadowColor: "#6366f1",
    shadowOpacity: 0.5,
    shadowRadius: 50,
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(168, 85, 247, 0.12)",
    shadowColor: "#a855f7",
    shadowOpacity: 0.4,
    shadowRadius: 60,
  },

  /* Titles */
  mainTitle: {
    fontSize: 34,
    fontWeight: "900",
    color: "#4A90E2",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#b7bec0",
    textAlign: "center",
    marginBottom: 20,
  },

  /* Intro */
  introSection: {
    backgroundColor: "rgba(33,37,41,0.6)",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#4A90E2",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#DEE3E4",
    lineHeight: 24,
    textAlign: "center",
  },

  /* Collapsible */
  collapseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(33,37,41,0.7)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  collapseTitle: {
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "700",
  },
  collapseIndicator: {
    color: "#4A90E2",
    fontSize: 18,
  },
  collapseBody: {
    marginTop: 10,
    backgroundColor: "rgba(33,37,41,0.6)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  collapseText: {
    color: "#DEE3E4",
    fontSize: 15,
    marginBottom: 6,
  },

  /* Sections */
  section: { marginBottom: 25 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
    marginBottom: 15,
  },

  /* Core components */
  componentsGrid: {
    backgroundColor: "rgba(33,37,41,0.6)",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  componentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  componentEmoji: { fontSize: 20, marginRight: 12 },
  componentText: { fontSize: 16, color: "#DEE3E4", fontWeight: "500" },

  /* Grade cards */
  gradeCard: {
    backgroundColor: "rgba(33,37,41,0.6)",
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: "#4A90E2",
    marginBottom: 20,
  },
  gradeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 10,
  },
  gradePoint: { color: "#DEE3E4", fontSize: 15, marginBottom: 6 },
  focusText: {
    color: "#4A90E2",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#4A90E2",
  },

  /* Back button */
  backButton: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
    backgroundColor: "rgba(32,201,151,0.1)",
    marginBottom: 30,
  },
  backButtonText: {
    color: "#4A90E2",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default AllTheGrades;
