import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollContainer}>
          {/* Animated background orbs */}
          <View style={styles.orb1} />
          <View style={styles.orb2} />

          <View style={styles.container}>
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <View style={styles.heroSection}>
                {/*  LOGO ADDED HERE */}
                <Image
                  source={require("../assets/logo1.png")}
                  style={styles.appLogo}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Navigation Links */}
            <View style={styles.navigationSection}>
              <View style={styles.linksContainer}>
                <Link href="/aboutTheApp" asChild>
                  <TouchableOpacity style={styles.linkButton}>
                    <View style={styles.linkContent}>
                      <Text style={styles.linkIcon}>ℹ️</Text>
                      <View style={styles.linkTextContainer}>
                        <Text style={styles.linkTitle}>About the App</Text>
                        <Text style={styles.linkSubtitle}>
                          Learn about our features
                        </Text>
                      </View>
                      <Text style={styles.linkArrow}>→</Text>
                    </View>
                  </TouchableOpacity>
                </Link>

                <Link href="/allTheGrades" asChild>
                  <TouchableOpacity style={styles.linkButton}>
                    <View style={styles.linkContent}>
                      <Text style={styles.linkIcon}>📚</Text>
                      <View style={styles.linkTextContainer}>
                        <Text style={styles.linkTitle}>
                          View all the Grades
                        </Text>
                        <Text style={styles.linkSubtitle}>
                          Explore Grade 1 to 8
                        </Text>
                      </View>
                      <Text style={styles.linkArrow}>→</Text>
                    </View>
                  </TouchableOpacity>
                </Link>

                <Link href="/studyMaterial" asChild>
                  <TouchableOpacity style={styles.linkButton}>
                    <View style={styles.linkContent}>
                      <Text style={styles.linkIcon}>📖</Text>
                      <View style={styles.linkTextContainer}>
                        <Text style={styles.linkTitle}>Study Material</Text>
                        <Text style={styles.linkSubtitle}>
                          Access resources & guides
                        </Text>
                      </View>
                      <Text style={styles.linkArrow}>→</Text>
                    </View>
                  </TouchableOpacity>
                </Link>

                <Link href="/listenExamples" asChild>
                  <TouchableOpacity style={styles.linkButton}>
                    <View style={styles.linkContent}>
                      <Text style={styles.linkIcon}>🎵</Text>
                      <View style={styles.linkTextContainer}>
                        <Text style={styles.linkTitle}>Listen to examples</Text>
                        <Text style={styles.linkSubtitle}>
                          Audio samples & demos
                        </Text>
                      </View>
                      <Text style={styles.linkArrow}>→</Text>
                    </View>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footerSection}>
              <Text style={styles.footerText}>
                Master your electric guitar playing with step-by-step graded
                material
              </Text>
              <View style={styles.footerDivider} />
              <Text style={styles.footerSubtext}>
                Practice • Learn • Progress
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

/* STYLES UNCHANGED BELOW */
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 30,
    minHeight: 1000,
  },

  /* ORBS (tinted blue now) */
  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(126, 64, 201, 0.21)",
    opacity: 0.6,
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 60,
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(74, 145, 226, 0.31)",
    opacity: 0.5,
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 70,
  },

  heroSection: {
    alignItems: "center",
    marginBottom: 20,
  },

  appLogo: {
    width: 280,
    height: 280,
  },

  /* BUTTONS + LINKS */
  navigationSection: {
    width: "100%",
    alignItems: "center",
  },

  linksContainer: {
    width: "100%",
    gap: 10,
  },

  linkButton: {
    backgroundColor: "rgba(74, 144, 226, 0.08)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.35)",
    overflow: "hidden",
  },

  linkContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  linkIcon: {
    fontSize: 24,
    marginRight: 15,
    color: "#4A90E2",
  },

  linkTextContainer: {
    flex: 1,
  },

  linkTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#DEE3E4",
    marginBottom: 4,
  },

  linkSubtitle: {
    fontSize: 14,
    color: "#4A90E2",
    opacity: 0.85,
  },

  linkArrow: {
    fontSize: 20,
    color: "#4A90E2",
    fontWeight: "bold",
  },

  /* FOOTER */
  footerSection: {
    alignItems: "center",
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(74, 144, 226, 0.3)",
  },

  footerText: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 15,
  },

  footerDivider: {
    width: 80,
    height: 2,
    backgroundColor: "#4A90E2",
    marginBottom: 10,
  },

  footerSubtext: {
    fontSize: 14,
    color: "#4A90E2",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1,
  },
});
