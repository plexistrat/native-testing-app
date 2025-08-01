import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Grade1SpokenTests = () => {
  const testSections = [
    {
      title: "Fingerboard Knowledge",
      icon: "🎯",
      color: "#4CAF50",
      requirements: [
        "Name notes on all the strings (up to the 8th fret)",
        "Understand fret and string numbering",
      ],
    },
    {
      title: "Clarity & Fluency",
      icon: "🗣️",
      color: "#2196F3",
      requirements: [
        "Demonstrate awareness of finger positions and hand placement",
        'Use correct terminology (e.g., "frets", "strings", "open string")',
      ],
    },
    {
      title: "Instrument Knowledge",
      icon: "🎸",
      color: "#FF9800",
      requirements: [
        "Identify basic guitar parts (body, neck, frets, strings, headstock, tuners)",
        "Understand the function of key components (e.g., how tuners affect pitch)",
        "Explain how to tune the guitar (basic idea, not full demonstration)",
      ],
    },
  ];

  const renderRequirement = (requirement, index, sectionColor) => (
    <View key={index} style={styles.requirementItem}>
      <View style={[styles.bulletPoint, { backgroundColor: sectionColor }]} />
      <Text style={styles.requirementText}>{requirement}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.mainTitle}>📝 Grade 1 Spoken Tests</Text>
        <Text style={styles.subtitle}>
          Essential knowledge assessment for guitar fundamentals
        </Text>
      </View>

      {/* Test Sections */}
      <View style={styles.sectionsContainer}>
        {testSections.map((section, index) => (
          <View key={index} style={styles.testSection}>
            <View
              style={[styles.sectionHeader, { borderLeftColor: section.color }]}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.sectionIcon}>{section.icon}</Text>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
            </View>

            <View style={styles.requirementsContainer}>
              {section.requirements.map((requirement, reqIndex) =>
                renderRequirement(requirement, reqIndex, section.color)
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Study Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>💡 Study Tips</Text>
        <View style={styles.tipsList}>
          <View style={styles.tipItem}>
            <Text style={styles.tipIcon}>🎯</Text>
            <Text style={styles.tipText}>
              Practice naming notes daily - use flashcards or apps
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipIcon}>📚</Text>
            <Text style={styles.tipText}>
              Learn guitar terminology gradually - one term per day
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipIcon}>🔧</Text>
            <Text style={styles.tipText}>
              Handle your guitar regularly to understand its parts
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipIcon}>🎵</Text>
            <Text style={styles.tipText}>
              Practice explaining concepts out loud to build confidence
            </Text>
          </View>
        </View>
      </View>

      {/* Progress Tracking */}
      <View style={styles.progressSection}>
        <Text style={styles.progressTitle}>📊 Assessment Areas</Text>
        <View style={styles.progressGrid}>
          <View style={[styles.progressCard, { borderColor: "#4CAF50" }]}>
            <Text style={styles.progressNumber}>8</Text>
            <Text style={styles.progressLabel}>Frets to Master</Text>
          </View>
          <View style={[styles.progressCard, { borderColor: "#2196F3" }]}>
            <Text style={styles.progressNumber}>6</Text>
            <Text style={styles.progressLabel}>Guitar Strings</Text>
          </View>
          <View style={[styles.progressCard, { borderColor: "#FF9800" }]}>
            <Text style={styles.progressNumber}>6</Text>
            <Text style={styles.progressLabel}>Main Guitar Parts</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Grade1SpokenTests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Header Styles
  headerSection: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
    paddingVertical: 25,
    // backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#B0BEC5",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  // Sections Container
  sectionsContainer: {
    marginBottom: 25,
  },
  testSection: {
    marginBottom: 20,
    // backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  sectionHeader: {
    padding: 20,
    borderLeftWidth: 4,
    // backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1,
  },

  // Requirements Styles
  requirementsContainer: {
    padding: 20,
    paddingTop: 10,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    paddingLeft: 5,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 15,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  requirementText: {
    flex: 1,
    fontSize: 16,
    color: "#E0E0E0",
    lineHeight: 24,
  },

  // Tips Section
  tipsSection: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(76, 175, 80, 0.2)",
    marginBottom: 25,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  tipsList: {
    paddingLeft: 5,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  tipIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 15,
    color: "#E8F5E8",
    lineHeight: 22,
  },

  // Progress Section
  progressSection: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: 30,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  progressGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  progressCard: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    borderWidth: 2,
    minWidth: "30%",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  progressNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: "#B0BEC5",
    textAlign: "center",
    fontWeight: "600",
  },
});
