import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FloatingNotesBackground from "./components/FloatingNotesBackground";
import { SafeAreaView } from "react-native-safe-area-context";

const grades = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView>
        <FloatingNotesBackground>
          <View style={styles.container}>
            <Text style={styles.mainTitle}>
              RGT Electric Guitar Grades – Overview
            </Text>

            <View style={styles.introSection}>
              <Text style={styles.description}>
                This app is based on the official syllabus of the Registry of
                Guitar Tutors (RGT). It helps guitarists prepare for recognized
                graded exams (Grades 1–8) through structured content and
                practical assessment categories.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Core Exam Components (All Grades)
              </Text>
              <Text style={styles.description}>
                Each grade level assesses the following key areas:
              </Text>

              <View style={styles.componentsGrid}>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Scales & Arpeggios</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Chords</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Rhythm Playing</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Lead Playing</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Spoken Test</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>Aural Assessment</Text>
                </View>
                <View style={styles.componentItem}>
                  <Text style={styles.componentText}>
                    Specialism (Grades 6–8)
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 1–2 (Beginner)</Text>
                <View style={styles.gradeContent}>
                  <Text style={styles.gradePoint}>
                    • Major/minor scales and basic chords
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Simple rhythm accompaniment
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Basic soloing and improvisation
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Introductory spoken & aural tests
                  </Text>
                  <Text style={styles.focusText}>
                    Focus: Building core technique and confidence
                  </Text>
                </View>
              </View>

              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 3–5 (Intermediate)</Text>
                <View style={styles.gradeContent}>
                  <Text style={styles.gradePoint}>
                    • Extended scale shapes, arpeggios
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Chord transitions and rhythmic patterns
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Solo development and phrasing
                  </Text>
                  <Text style={styles.gradePoint}>
                    • More advanced musical knowledge
                  </Text>
                  <Text style={styles.focusText}>
                    Focus: Expanding range, accuracy, musicality
                  </Text>
                </View>
              </View>

              <View style={styles.gradeCard}>
                <Text style={styles.gradeTitle}>Grades 6–8 (Advanced)</Text>
                <View style={styles.gradeContent}>
                  <Text style={styles.gradePoint}>
                    • Full fretboard scale fluency, modes
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Complex rhythms and stylistic chord work
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Creative soloing, advanced techniques
                  </Text>
                  <Text style={styles.gradePoint}>
                    • Specialism: perform your own composition
                  </Text>
                  <Text style={styles.focusText}>
                    Focus: Expressive playing, mastery, personal style
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </FloatingNotesBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#212529",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#20c997",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 36,
  },
  introSection: {
    backgroundColor: "#212529",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#20c997",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#DEE3E4",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  componentsGrid: {
    backgroundColor: "#212529",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#20c997",
  },
  componentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
  },
  componentEmoji: {
    fontSize: 20,
    marginRight: 12,
    width: 30,
  },
  componentText: {
    fontSize: 16,
    color: "#DEE3E4",
    fontWeight: "500",
    flex: 1,
  },
  gradeCard: {
    backgroundColor: "#212529",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: "#20c997",
    borderWidth: 1,
    borderColor: "#20c997",
  },
  gradeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 15,
    textAlign: "center",
  },
  gradeContent: {
    paddingHorizontal: 10,
  },
  gradePoint: {
    fontSize: 15,
    color: "#DEE3E4",
    lineHeight: 22,
    marginBottom: 8,
  },
  focusText: {
    fontSize: 15,
    color: "#20c997",
    fontWeight: "600",
    fontStyle: "italic",
    marginTop: 10,
    textAlign: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#20c997",
  },
});

export default grades;
