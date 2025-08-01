import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import FloatingNotesBackground from "./components/FloatingNotesBackground";
import { SafeAreaView } from "react-native-safe-area-context";

export default function about() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView>
        <FloatingNotesBackground>
          <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>About the App</Text>
              <View style={styles.divider} />
              <Text style={styles.subtitle}>
                Welcome to the ultimate companion for your electric guitar
                journey.
              </Text>
            </View>

            {/* Main Content */}
            <View style={styles.contentSection}>
              <Text style={styles.paragraph}>
                This app is designed for students, teachers, and guitar
                enthusiasts preparing for the{" "}
                <Text style={styles.boldText}>
                  RGT (Registry of Guitar Tutors){" "}
                </Text>
                electric guitar exams — from Grade 1 all the way to Grade 8.
                Whether you're just starting out or aiming for advanced
                performance, this app helps you:
              </Text>

              {/* Features List */}
              <View style={styles.featuresContainer}>
                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Understand each grade's requirements
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Access study materials and backing tracks
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Track your technical progress
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.featureText}>
                    Listen to performance examples
                  </Text>
                </View>
              </View>

              {/* Closing Section */}
              <View style={styles.closingSection}>
                <Text style={styles.paragraph}>
                  With a modern, intuitive interface and content aligned with
                  the official RGT syllabus, we aim to inspire consistent
                  practice and confident playing.
                </Text>

                <View style={styles.mottoContainer}>
                  <Text style={styles.motto}>Learn. Play. Progress.</Text>
                  <View style={styles.mottoUnderline} />
                </View>
              </View>
            </View>

            {/* Guitar Icon */}
            <View style={styles.guitarIcon}>
              <Text style={styles.guitarEmoji}>🎸</Text>
            </View>
          </View>
        </FloatingNotesBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    minHeight: 1000,
  },
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
  contentSection: {
    width: "100%",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
    opacity: 0.9,
  },
  boldText: {
    fontWeight: "bold",
    color: "#20c997",
  },
  featuresContainer: {
    width: "100%",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "rgba(32, 201, 151, 0.1)",
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
    flex: 1,
    lineHeight: 22,
  },
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
  mottoUnderline: {
    width: 120,
    height: 3,
    backgroundColor: "#20c997",
    borderRadius: 2,
    marginTop: 10,
  },
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
});
