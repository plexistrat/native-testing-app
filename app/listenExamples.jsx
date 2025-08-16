import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import YouTubePlayer from "./components/YouTubePlayer";
const listenExamples = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>🎸 Listening Examples</Text>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>
              Welcome to the Listening Examples You Tube Channel for the RGT
              Electric Guitar Grades App
            </Text>
          </View>

          <View style={styles.featuresSection}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎧</Text>
              <Text style={styles.featureText}>
                Hear how each exam piece sounds
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎵</Text>
              <Text style={styles.featureText}>From Grade 1 to Grade 8</Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎯</Text>
              <Text style={styles.featureText}>
                Backing tracks, lead parts, and improvisation samples
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🧠</Text>
              <Text style={styles.featureText}>
                Practice smarter. Play better.
              </Text>
            </View>
          </View>

          <View>
            <YouTubePlayer
              videoId="H8FB6jAv-xY"
              title="Grade 1,Aural tests, repetition of rhythm examples"
            />
            <YouTubePlayer
              videoId="opHgVSe3UFE"
              title="Grade 1, Aural tests, repetition of melodic phrase, A minor pentatonic scale"
            />
            <YouTubePlayer
              videoId="L2UwQYt443E"
              title="Grade 1, Aural tests, repetition of melodic phrase, G major pentatonic scale"
            />
          </View>
          <View style={styles.ctaSection}>
            <Text style={styles.ctbText}>
              You will find more examples to my YouTube Channel
            </Text>
            <Text style={styles.ctaText}>
              Subscribe & start your journey today!
            </Text>

            <Link
              href="https://www.youtube.com/watch?v=9zfKh_Pm8T4&ab_channel=Dutchguitarman"
              style={styles.youtubeLink}
            >
              <Text style={styles.youtubeLinkText}>
                Go to my YouTube Channel
              </Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default listenExamples;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 30,
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
    marginBottom: 40,
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
  },
  ctaText: {
    fontSize: 20,
    color: "#20c997",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  ctbText: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 15,
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
});
