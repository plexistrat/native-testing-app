import { ScrollView, StyleSheet, Text, View } from "react-native";
import YouTubePlayer from "./components/YouTubePlayer";

const grade2LeadGuitar = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Grade 2 Lead Guitar</Text>
        <Text style={styles.description}>
          In this section you will find backing track videos, from my YouTube
          channel with chord progressions that are suitable for Grade 2 Lead
          Guitar
        </Text>
        <View style={styles.linksContainer}>
          <YouTubePlayer
            videoId="vYpKlHDFat4"
            title="Grade 2, lead guitar , C major 7th"
          />
          <YouTubePlayer
            videoId="4oERmHtpoy8"
            title="Grade 2, lead guitar, A minor 7th"
          />
          <YouTubePlayer
            videoId="Krhutwkt558"
            title="Grade 2, lead guitar, D major"
          />
          <YouTubePlayer
            videoId="FWrewaqWScU"
            title="Grade 2, lead guitar, G dom 7th"
          />
        </View>

        <View style={styles.studySection}>
          <Text style={styles.sectionTitle}>
            Lead Guitar Improvisation – Study Ideas & Practice Methods
          </Text>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎯 1. Scale Practice</Text>
            <Text style={styles.studyText}>
              Practice major, minor, and pentatonic scales slowly and evenly.
            </Text>
            <Text style={styles.studyText}>
              Use different rhythms: quarter notes, eighth notes, triplets.
            </Text>
            <Text style={styles.studyText}>
              Play with a metronome to develop timing and consistency.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎼 2. Backing Track Jamming</Text>
            <Text style={styles.studyText}>
              Choose simple chord progressions and jam along.
            </Text>
            <Text style={styles.studyText}>
              Focus on staying in key and playing simple, clean phrases.
            </Text>
            <Text style={styles.studyText}>
              Try using just 2–3 notes from the scale at first.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎸 3. Learn Short Licks</Text>
            <Text style={styles.studyText}>
              Learn easy phrases (licks) from songs or famous guitarists.
            </Text>
            <Text style={styles.studyText}>
              Play slowly at first, then gradually increase speed.
            </Text>
            <Text style={styles.studyText}>
              Try changing the rhythm or starting note to make the lick your
              own.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🌀 4. Rhythm Practice</Text>
            <Text style={styles.studyText}>
              Focus on playing notes with different rhythms, even using just 1
              or 2 notes.
            </Text>
            <Text style={styles.studyText}>
              Clap or tap the rhythm first, then play it on your guitar.
            </Text>
            <Text style={styles.studyText}>
              Use a metronome to develop steady timing.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎥 5. Record & Listen</Text>
            <Text style={styles.studyText}>
              Record yourself playing scales or improvising over backing tracks.
            </Text>
            <Text style={styles.studyText}>
              Listen carefully to tone, timing, and smoothness.
            </Text>
            <Text style={styles.studyText}>
              Note what works and what you want to improve next time.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>📘 6. Keep a Guitar Notebook</Text>
            <Text style={styles.studyText}>
              Write down favorite licks, scale patterns, and chord shapes.
            </Text>
            <Text style={styles.studyText}>
              This will help you build your own improvisation vocabulary
              gradually.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default grade2LeadGuitar;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
    opacity: 0.9,
  },
  linksContainer: {
    width: "100%",
    alignItems: "stretch",
    marginBottom: 40,
  },
  link: {
    backgroundColor: "#20c997",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linkText: {
    color: "#212529",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  studySection: {
    width: "100%",
    backgroundColor: "rgba(222, 227, 228, 0.05)",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.2)",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 20,
    textAlign: "center",
  },
  studyItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(222, 227, 228, 0.1)",
  },
  studyHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 8,
  },
  studyText: {
    fontSize: 14,
    color: "#DEE3E4",
    lineHeight: 20,
    marginBottom: 4,
    opacity: 0.9,
  },
});
