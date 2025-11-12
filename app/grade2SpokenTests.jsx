import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Grade2SpokenTests = () => {
  const spokenSections = [
    {
      title: "1. Fingerboard Knowledge",
      description:
        "The examiner names a string and fret — you must name the note. Be familiar with the scales used in Component 1.",
      icon: <Ionicons name="musical-notes" size={28} color="#4FC3F7" />,
      color: "#4FC3F720",
      borderColor: "#4FC3F7",
    },
    {
      title: "2. Clarity & Fluency",
      description:
        "Fretting-hand positioning: keep fingers close to frets using fingertips.\n\nFluency when picking: use alternate picking (down-up) smoothly, avoid too much or too little pick showing.",
      icon: (
        <MaterialCommunityIcons name="guitar-pick" size={28} color="#81C784" />
      ),
      color: "#81C78420",
      borderColor: "#81C784",
    },
    {
      title: "3. Knowledge of the Instrument",
      description:
        "Understand how tone changes with hand position or pickup selection.\n\nKnow the machine heads (tuners), action (string height), marker dots (position guides), nut, and saddle.",
      icon: <FontAwesome5 name="guitar" size={26} color="#FFB74D" />,
      color: "#FFB74D20",
      borderColor: "#FFB74D",
    },
    {
      title: "4. Controls on an Amplifier",
      description:
        "Understand volume vs gain relationship, and bass/mid/treble controls.\n\nKnow what the standby switch does (valve amps).\n\nExample questions:\n• How to set gain high but volume low.\n• Name two types of amp (valve, transistor, modelling, hybrid).",
      icon: (
        <MaterialCommunityIcons name="amplifier" size={28} color="#F06292" />
      ),
      color: "#F0629220",
      borderColor: "#F06292",
    },
  ];

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>Grade 2 Spoken Tests</Text>
          <Text style={styles.subtitle}>
            Expanding your guitar understanding and awareness
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
          <Text style={styles.tipsTitle}>💡 Practice Tips</Text>
          <Text style={styles.tipText}>
            • Revise scale notes regularly to strengthen fretboard knowledge.
          </Text>
          <Text style={styles.tipText}>
            • Practice picking patterns slowly, increasing speed gradually.
          </Text>
          <Text style={styles.tipText}>
            • Experiment with amp settings to hear tone changes.
          </Text>
          <Text style={styles.tipText}>
            • Record short clips to monitor tone and technique consistency.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Grade2SpokenTests;

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
    backgroundColor: "rgba(79, 195, 247, 0.1)",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(79, 195, 247, 0.3)",
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4FC3F7",
    marginBottom: 12,
    textAlign: "center",
  },
  tipText: {
    fontSize: 15,
    color: "#E1F5FE",
    marginBottom: 6,
    lineHeight: 22,
  },
});
