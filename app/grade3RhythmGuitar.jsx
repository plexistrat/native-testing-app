import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const grade3RhythmGuitar = () => {
  const rhythmSections = [
    {
      title: "Fairly Slow",
      image: require("../assets/img/grade3FailrySlow.jpg"),
      description: "Slow, emotional tempo with gentle strumming patterns",
      color: "#4CAF50",
    },
    {
      title: "Not Too Slow",
      image: require("../assets/img/grade3NotTooSlow.jpg"),
      description: "Moderate pace with balanced rhythm patterns",
      color: "#2196F3",
    },
    {
      title: "Moderate Tempo",
      image: require("../assets/img/grade3ModerateTempo.jpg"),
      description: "Relaxed tempo focusing on chord transitions",
      color: "#FF9800",
    },
    {
      title: "Slow Ballad",
      image: require("../assets/img/grade3SlowBallad.jpg"),
      description: "Fast-paced energetic strumming patterns",
      color: "#F44336",
    },
  ];

  const dynamicsAndRepeatInfo = [
    {
      symbol: "p",
      name: "piano",
      description: "play softly",
      color: "#4CAF50",
    },
    {
      symbol: "f",
      name: "forte",
      description: "play loudly",
      color: "#F44336",
    },
    {
      symbol: "<",
      name: "crescendo",
      description: "gradually louder",
      color: "#2196F3",
    },
    {
      symbol: ">",
      name: "decrescendo",
      description: "gradually quieter",
      color: "#FF9800",
    },
    {
      symbol: ":",
      name: "repeat",
      description: "repeat the same section",
      color: "#4CAF50",
    },
    {
      symbol: "Γ1.",
      name: "First Ending",
      description: "play this measure the first time only",
      color: "#9C27B0",
    },
    {
      symbol: "Γ2.",
      name: "Second Ending",
      description: "skip Γ1 and play this ending the second time",
      color: "#00BCD4",
    },
  ];

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* <FloatingNotesBackground> */}
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}> Grade 3 Rhythm Guitar</Text>
        </View>

        {/* Rhythm Sections */}
        <View style={styles.sectionsContainer}>
          {rhythmSections.map((section, index) => (
            <View key={index} style={styles.section}>
              <View
                style={[
                  styles.sectionHeader,
                  { borderLeftColor: section.color },
                ]}
              >
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionDescription}>
                  {section.description}
                </Text>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={section.image}
                  style={styles.progressionImage}
                  resizeMode="contain"
                />
                <View
                  style={[
                    styles.imageOverlay,
                    { backgroundColor: section.color + "20" },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Dynamics Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoTitle}>Dynamics and Repeat Explained</Text>
            <Text style={styles.infoSubtitle}>
              Understanding musical expression
            </Text>
          </View>

          <View style={styles.dynamicsGrid}>
            {dynamicsAndRepeatInfo.map((dynamic, index) => (
              <View key={index} style={styles.dynamicCard}>
                <View
                  style={[
                    styles.symbolContainer,
                    { backgroundColor: dynamic.color },
                  ]}
                >
                  <Text style={styles.symbolText}>{dynamic.symbol}</Text>
                </View>
                <View style={styles.dynamicInfo}>
                  <Text style={styles.dynamicName}>
                    <Text style={styles.italicText}>{dynamic.name}</Text>
                  </Text>
                  <Text style={styles.dynamicDescription}>
                    {dynamic.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Practice Tips */}
          <View style={styles.tipsSection}>
            <Text style={styles.tipsTitle}>💡 Practice Tips</Text>
            <View style={styles.tipsList}>
              <Text style={styles.tipText}>
                • Start slowly and focus on clean chord changes
              </Text>
              <Text style={styles.tipText}>
                • Use a metronome to maintain steady tempo
              </Text>
              <Text style={styles.tipText}>
                • Practice dynamics with each rhythm pattern
              </Text>
              <Text style={styles.tipText}>
                • Record yourself to identify areas for improvement
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* </FloatingNotesBackground> */}
    </ScrollView>
  );
};

export default grade3RhythmGuitar;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  // Header Styles
  headerSection: {
    alignItems: "center",
    marginBottom: 40,
    paddingVertical: 20,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    fontStyle: "italic",
  },

  // Sections Container
  sectionsContainer: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
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
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#90A4AE",
    lineHeight: 20,
  },

  // Image Styles
  imageContainer: {
    position: "relative",
    margin: 15,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
  },
  progressionImage: {
    width: "100%",
    height: 100,
    borderRadius: 12,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
  },

  // Info Section
  infoSection: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 10,
  },
  infoHeader: {
    alignItems: "center",
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },
  infoSubtitle: {
    fontSize: 14,
    color: "#B0BEC5",
    fontStyle: "italic",
  },

  // Dynamics Grid
  dynamicsGrid: {
    marginBottom: 25,
  },
  dynamicCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  symbolContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  symbolText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  dynamicInfo: {
    flex: 1,
  },
  dynamicName: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 4,
    fontWeight: "600",
  },
  italicText: {
    fontStyle: "italic",
    color: "#E0E0E0",
  },
  dynamicDescription: {
    fontSize: 14,
    color: "#90A4AE",
    lineHeight: 18,
  },

  // Tips Section
  tipsSection: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(76, 175, 80, 0.2)",
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 15,
    textAlign: "center",
  },
  tipsList: {
    paddingLeft: 5,
  },
  tipText: {
    fontSize: 15,
    color: "#E8F5E8",
    lineHeight: 24,
    marginBottom: 8,
  },
});
