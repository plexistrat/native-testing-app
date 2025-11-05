import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FloatingNotesBackground from "./components/FloatingNotesBackground";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        <FloatingNotesBackground>
          <View style={styles.container}>
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <View style={styles.titleContainer}>
                <Text style={styles.title1}>Explore</Text>
                <Text style={styles.title2}>the </Text>
                <Text style={styles.title3}>RGT</Text>
                <Text style={styles.title4}>electric guitar grades</Text>
              </View>

              {/* Decorative Elements */}
              <View style={styles.decorativeContainer}>
                <View style={styles.decorativeLine} />
                <Text style={styles.guitarEmoji}>🎸</Text>
                <View style={styles.decorativeLine} />
              </View>
            </View>

            {/* Navigation Links */}
            <View style={styles.navigationSection}>
              <Text style={styles.sectionTitle}>Get Started</Text>
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
                Master your electric guitar journey with RGT certification
              </Text>
              <View style={styles.footerDivider} />
              <Text style={styles.footerSubtext}>
                Practice • Learn • Progress
              </Text>
            </View>
          </View>
        </FloatingNotesBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 1000,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 60,
  },
  titleContainer: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  title1: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "left",
    width: "100%",
    textShadowColor: "rgba(32, 201, 151, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  title2: {
    fontSize: 28,
    fontWeight: "600",
    color: "#DEE3E4",
    opacity: 0.8,
    marginLeft: 60,
  },
  title3: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#20c997",
    textAlign: "center",
    width: "100%",
    letterSpacing: 2,
  },
  title4: {
    fontSize: 24,
    fontWeight: "600",
    color: "#DEE3E4",
    textAlign: "center",
    width: "100%",
    marginTop: 5,
    opacity: 0.9,
  },
  decorativeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  decorativeLine: {
    width: 50,
    height: 2,
    backgroundColor: "#20c997",
    marginHorizontal: 15,
  },
  guitarEmoji: {
    fontSize: 32,
  },
  navigationSection: {
    width: "100%",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 30,
    textAlign: "center",
  },
  linksContainer: {
    width: "100%",
    gap: 15,
  },
  linkButton: {
    backgroundColor: "rgba(32, 201, 151, 0.1)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.3)",
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
    color: "#20c997",
    opacity: 0.8,
  },
  linkArrow: {
    fontSize: 20,
    color: "#20c997",
    fontWeight: "bold",
  },
  footerSection: {
    alignItems: "center",
    marginTop: 60,
    paddingTop: 40,
    borderTopWidth: 1,
    borderTopColor: "rgba(32, 201, 151, 0.2)",
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
    backgroundColor: "#20c997",
    marginBottom: 15,
  },
  footerSubtext: {
    fontSize: 14,
    color: "#20c997",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 1,
  },
});
