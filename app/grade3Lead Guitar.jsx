import { ScrollView, StyleSheet, Text, View } from "react-native";
import YouTubePlayer from "./components/YouTubePlayer";

const grade3LeadGuitar = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Grade 3 Lead Guitar</Text>
        <Text style={styles.description}>
          In this section you will find backing track videos, from my YouTube
          channel with chord progressions that are suitable for Grade 3 Lead
          Guitar
        </Text>
        <View style={styles.linksContainer}>
          <YouTubePlayer
            videoId="W3Y-jkUDpWY"
            title="Grade 3, lead guitar in C minor"
          />
          <YouTubePlayer
            videoId="ZHsWCgSRNes"
            title="Grade 3, lead in D flat major"
          />
          <YouTubePlayer
            videoId="LX9Z99qQxs0"
            title="Grade 3, lead in E major"
          />
          <YouTubePlayer
            videoId="NSyVfTtx6HM"
            title="Grade 3, lead in G minor"
          />
        </View>

        <View style={styles.studySection}>
          <Text style={styles.sectionTitle}>
            Lead Guitar Improvisation – Study Ideas & Practice Methods
          </Text>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎯 1. Scale Practice</Text>
            <Text style={styles.studyText}>
              Practice major, minor, and pentatonic scales across the fretboard.
            </Text>
            <Text style={styles.studyText}>
              Use different rhythms: quarter notes, eighth notes, triplets, and
              sixteenths.
            </Text>
            <Text style={styles.studyText}>
              Play with a metronome to develop timing, control, and consistency.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎼 2. Backing Track Jamming</Text>
            <Text style={styles.studyText}>
              Jam along with simple chord progressions in different keys.
            </Text>
            <Text style={styles.studyText}>
              Focus on smooth phrasing and staying in the key.
            </Text>
            <Text style={styles.studyText}>
              Experiment using only 2–3 notes at a time to build musical ideas.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎸 3. Short Lick Development</Text>
            <Text style={styles.studyText}>
              Learn short guitar licks from songs or admired players.
            </Text>
            <Text style={styles.studyText}>
              Play slowly at first, then increase speed while maintaining
              clarity.
            </Text>
            <Text style={styles.studyText}>
              Modify rhythm, phrasing, or starting note to make the lick your
              own.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🌀 4. Rhythmic Improvisation</Text>
            <Text style={styles.studyText}>
              Focus on rhythm patterns using a few notes, emphasizing timing.
            </Text>
            <Text style={styles.studyText}>
              Clap or tap the rhythm first, then apply it on the guitar.
            </Text>
            <Text style={styles.studyText}>
              Challenge yourself with different note groupings and accents.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🌀 5. Arpeggio Usage</Text>
            <Text style={styles.studyText}></Text>
            <Text style={styles.studyText}>
              Arpeggios help you outline the chord tones while improvising,
              giving your solos more direction and clarity.
            </Text>
            <Text style={styles.studyText}>
              Practice connecting arpeggio shapes smoothly across the fretboard
              to create more melodic lines.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎥 6. Record & Reflect</Text>
            <Text style={styles.studyText}>
              Record your improvisations over backing tracks or scales.
            </Text>
            <Text style={styles.studyText}>
              Listen critically to tone, timing, and phrasing, noting areas to
              improve.
            </Text>
            <Text style={styles.studyText}>
              Repeat and refine your ideas to develop consistency and
              musicality.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>📘 7. Guitar Journal</Text>
            <Text style={styles.studyText}>
              Maintain a notebook with favorite licks, scale patterns, and chord
              shapes.
            </Text>
            <Text style={styles.studyText}>
              Use it to track progress and build your personal improvisation
              vocabulary.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default grade3LeadGuitar;

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
