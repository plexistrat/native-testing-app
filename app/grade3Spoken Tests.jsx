import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import BackButton from "./components/BackButton";

const Grade3SpokenTests = () => {
  const spokenSections = [
    {
      title: "1. Fingerboard Knowledge",
      description:
        "You will be asked to name notes on particular strings and frets taken from scales in Component 1.\n\nContinue expanding your knowledge of the entire fretboard. Be confident naming all natural notes up to the 12th fret on each string.",
      icon: <Ionicons name="musical-notes" size={28} color="#4FC3F7" />,
      color: "#4FC3F720",
      borderColor: "#4FC3F7",
    },
    {
      title: "2. Clarity and Fluency",
      description:
        "You may be asked about optimum hand positioning and fluency when playing:\n\n• Keep fingers close to the frets, pressing with fingertips.\n• Maintain relaxed wrist and thumb placement.\n• Use alternate picking for consistent tone.\n• Control unwanted noise by muting unused strings.\n\nFluency develops through even tone and rhythm—accuracy is more important than speed.",
      icon: (
        <MaterialCommunityIcons name="hand-clap" size={28} color="#81C784" />
      ),
      color: "#81C78420",
      borderColor: "#81C784",
    },
    {
      title: "3. Knowledge of the Instrument",
      description:
        "You may be asked about key parts of the guitar and their functions:\n• Headstock – holds the tuning machines\n• Nut – spaces the strings evenly\n• Frets – divide the fingerboard into semitones\n• Bridge and saddle – support the strings and define vibration length\n• Marker dots – guide visual positioning at frets 3, 5, 7, 9, and 12\n\nAlso understand how string tension and action affect playability.",
      icon: <FontAwesome5 name="guitar" size={26} color="#FFB74D" />,
      color: "#FFB74D20",
      borderColor: "#FFB74D",
    },
    {
      title: "4. Types of Effects Pedals",
      description:
        "You should understand the main categories of effects pedals and their functions:\n\n🎸 **Overdrive / Distortion / Fuzz** – Add gain and saturation for more aggressive tones.\n🎚️ **Filter Effects** – Wah or envelope filter alter tone by emphasizing frequency ranges.\n🎛️ **Modulation Effects** – Chorus, flanger, phaser; add movement and depth.\n⏱️ **Delay & Reverb** – Create echo or spatial ambience, making the sound larger or more atmospheric.\n\nYou may be asked to describe how each affects the tone or to identify the type of sound they produce.",
      icon: <MaterialCommunityIcons name="tune" size={28} color="#BA68C8" />,
      color: "#BA68C820",
      borderColor: "#BA68C8",
    },
  ];

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>Grade 3 Spoken Tests</Text>
          <Text style={styles.subtitle}>
            Building tone control and deeper understanding of the guitar and its
            sound
          </Text>
        </View>

        {spokenSections.map((section, index) => (
          <View
            key={index}
            style={[
              styles.sectionCard,
              {
                backgroundColor: section.color,
                borderColor: section.borderColor,
              },
            ]}
          >
            <View style={styles.sectionHeader}>
              {section.icon}
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            <Text style={styles.sectionDescription}>{section.description}</Text>
          </View>
        ))}

        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>💡 Study & Practice Tips</Text>
          <Text style={styles.tipText}>
            • Practice describing what each pedal type does in simple terms.
          </Text>
          <Text style={styles.tipText}>
            • Experiment with how your picking and fretting hand affect clarity.
          </Text>
          <Text style={styles.tipText}>
            • Record your playing with and without effects to hear tonal
            differences.
          </Text>
          <Text style={styles.tipText}>
            • Continue naming notes up to the 12th fret daily.
          </Text>
        </View>
        <BackButton />
      </View>
    </ScrollView>
  );
};

export default Grade3SpokenTests;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#1B1F24",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 35,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#B0BEC5",
    fontStyle: "italic",
    textAlign: "center",
  },
  sectionCard: {
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    borderWidth: 1.2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1,
    flexWrap: "wrap",
  },
  sectionDescription: {
    fontSize: 15,
    color: "#CFD8DC",
    lineHeight: 22,
  },
  tipsSection: {
    backgroundColor: "rgba(186, 104, 200, 0.1)",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(186, 104, 200, 0.3)",
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#BA68C8",
    marginBottom: 12,
    textAlign: "center",
  },
  tipText: {
    fontSize: 15,
    color: "#E1BEE7",
    marginBottom: 6,
    lineHeight: 22,
  },
});
