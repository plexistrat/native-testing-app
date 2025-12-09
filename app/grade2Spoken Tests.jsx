import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import BackButton from "./components/BackButton";

const Grade2SpokenTests = () => {
  const spokenSections = [
    {
      title: "1. Fingerboard Knowledge",
      description:
        "You will be asked to name notes on specific strings and frets.\n\nLearn the notes up to the 12th fret on each string.\nBe confident in identifying open strings and simple fretted notes.",
      icon: <Ionicons name="musical-notes" size={28} color="#4FC3F7" />,
      color: "#4FC3F720",
      borderColor: "#4FC3F7",
    },
    {
      title: "2. Clarity and Fluency",
      description:
        "Strive to produce clean, even, and well-balanced notes throughout your playing.\n\nMaintain precise left-hand technique by keeping the fingers close to the frets for accurate pitch. Reduce noise by lightly muting unused strings.\n\nUse alternate picking for consistent right-hand movement.\nHold the pick firmly with only a small portion exposed for stability and control.",
      icon: (
        <MaterialCommunityIcons name="hand-clap" size={28} color="#81C784" />
      ),
      color: "#81C78420",
      borderColor: "#81C784",
    },
    {
      title: "3. Knowledge of the Instrument",
      description:
        "Understand the essential parts and functions of the guitar:\n\n• **Headstock** – holds the machine heads for tuning.\n• **Nut** – guides the strings at the top of the fingerboard and maintains spacing.\n• **Neck and Fingerboard** – where notes are fretted.\n• **Frets** – metal strips dividing the fingerboard into semitones.\n• **Marker dots** – position indicators along the fingerboard.\n• **Body** – contributes to resonance and overall tone.\n• **Bridge** – anchors strings and transfers vibrations to the body.\n• **Saddle** – supports the strings at the bridge and affects intonation.\n\nUnderstanding setup:\n• **Action** – height of the strings above the frets; affects comfort and tone.\n• **Pickup selector** – chooses between brighter, warmer, or balanced tones.\n• **Tone & volume controls** – shape clarity, warmth, and output level.\n• **Picking-hand position** – near the bridge for brightness, near the neck for warmth.",
      icon: <FontAwesome5 name="guitar" size={26} color="#FFB74D" />,
      color: "#FFB74D20",
      borderColor: "#FFB74D",
    },
    {
      title: "4. Basic Functions on an Amplifier",
      description:
        "Understand the purpose of the main amplifier controls:\n\n• **Volume** – controls overall loudness.\n• **Gain** – controls input strength and adds drive or distortion.\n\nHow gain and volume interact:\n• High **gain** + low **volume** = heavy distortion but quiet output.\n• Low **gain** + high **volume** = clean tone but louder.\n• Balanced gain + volume = controlled crunch with dynamics.\n\nEQ section:\n• **Treble** – brightness, clarity, definition.\n• **Middle** – body, presence, mix placement.\n• **Bass** – warmth, depth, low-end fullness.\n\nTypes of amplifiers:\n• **Tube amps** – warm, dynamic, responsive, used in classic rock/blues.\n• **Solid-state (transistor)** – reliable, clean, affordable.\n• **Hybrid amps** – tube preamp + solid-state power section.\n• **Digital/modeling amps** – simulate many amp types and effects.\n\nBe ready to answer questions like:\n• What changes when you increase the gain?\n• How does EQ shape your tone?\n• How do digital amps differ from tube amps?",
      icon: (
        <MaterialCommunityIcons name="amplifier" size={28} color="#F06292" />
      ),
      color: "#F0629220",
      borderColor: "#F06292",
    },
  ];

  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wrapper}>
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.container}>
              <View style={styles.headerSection}>
                <Text style={styles.mainTitle}>Grade 2 Spoken Tests</Text>
                <Text style={styles.subtitle}>
                  Introducing guitar knowledge and essential technique
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
                  <Text style={styles.sectionDescription}>
                    {section.description}
                  </Text>
                </View>
              ))}

              <View style={styles.tipsSection}>
                <Text style={styles.tipsTitle}>💡 Practice Tips</Text>
                <Text style={styles.tipText}>
                  • Say note names aloud as you play.
                </Text>
                <Text style={styles.tipText}>
                  • Keep your fingers curved and close to the strings.
                </Text>
                <Text style={styles.tipText}>
                  • Practice on both clean and overdriven tones.
                </Text>
                <Text style={styles.tipText}>
                  • Record yourself to check clarity and consistency.
                </Text>
              </View>
            </View>
            <BackButton />
            <Image
              source={require("../assets/logo1.png")}
              style={styles.appLogo}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Grade2SpokenTests;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  wrapper: {
    position: "relative",
    minHeight: 1000,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
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
  appLogo: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 1,
    right: 20,
    opacity: 0.5,
  },
});
