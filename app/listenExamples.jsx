import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import YouTubePlayer from "./components/YouTubePlayer";
import BackButton from "./components/BackButton";

const listenExamples = () => {
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.wrapper}>
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.container}>
              <Text style={styles.title}>🎸 Listening Examples</Text>

              <View style={styles.welcomeSection}>
                <Text style={styles.welcomeText}>
                  Welcome to the Listening Examples section of the Electric
                  Guitar Grades App.
                </Text>
              </View>

              <View style={styles.featuresSection}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎧</Text>
                  <Text style={styles.featureText}>
                    Hear demonstration performances for grade material
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎵</Text>
                  <Text style={styles.featureText}>
                    Covering beginner to advanced levels
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎯</Text>
                  <Text style={styles.featureText}>
                    Rhythm guitar examples, groove playing & improvisation
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🧠</Text>
                  <Text style={styles.featureText}>
                    Learn how exam sections sound in context
                  </Text>
                </View>
              </View>

              <View>
                <YouTubePlayer
                  videoId="Aqoq2QR_NrI"
                  title="Grade 1 – Rhythm Guitar Example"
                />
                <YouTubePlayer
                  videoId="oxAFo-JTJus"
                  title="Grade 1 – Rhythm Guitar Example"
                />
              </View>

              <View style={styles.ctaSection}>
                <Text style={styles.ctbText}>
                  More examples are available on my YouTube Channel.
                </Text>
                <Text style={styles.ctaText}>Subscribe and keep learning!</Text>

                <Link
                  href="https://www.youtube.com/watch?v=9zfKh_Pm8T4&ab_channel=Dutchguitarman"
                  style={styles.youtubeLink}
                >
                  <Text style={styles.youtubeLinkText}>
                    Go to YouTube Channel
                  </Text>
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

export default listenExamples;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  wrapper: {
    position: "relative",
    // minHeight: 1000,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(99, 102, 241, 0.15)",
    opacity: 0.6,
    shadowColor: "#6366f1",
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
    backgroundColor: "rgba(168, 85, 247, 0.12)",
    opacity: 0.5,
    shadowColor: "#a855f7",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeSection: {
    backgroundColor: "rgba(32, 201, 151, 0.1)",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.3)",
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: "#20c997",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 24,
  },
  featuresSection: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(222, 227, 228, 0.05)",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#20c997",
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
  },
  featureText: {
    fontSize: 16,
    color: "#DEE3E4",
    flex: 1,
    lineHeight: 22,
  },
  ctaSection: {
    alignItems: "center",
    marginTop: 10,
  },
  ctaText: {
    fontSize: 20,
    color: "#20c997",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  ctbText: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 10,
  },
  youtubeLink: {
    marginBottom: 20,
    backgroundColor: "#ed4242ff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  youtubeLinkText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
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
