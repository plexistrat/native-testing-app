import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import BackButton from "./components/BackButton";

const Grade1SpokenTests = () => {
  const spokenSections = [
    {
      title: "1. Fingerboard Knowledge",
      description:
        "You will be asked to name notes on specific strings and frets.\n\nLearn the natural notes (A–G) up to the 8th fret on each string.\nBe confident in identifying open strings and simple fretted notes.",
      icon: <Ionicons name="musical-notes" size={28} color="#4FC3F7" />,
      color: "#4FC3F720",
      borderColor: "#4FC3F7",
    },
    {
      title: "2. Clarity and Fluency",
      description:
        "Strive to produce clean, even, and well-balanced notes throughout your scale and lead-playing practice.\n\nMaintain precise left-hand technique by keeping the fingers close to the frets and using the fingertips for accurate pitch and minimal effort. Reduce extraneous noise by lightly muting adjacent, unused strings.\n\nFor the right hand, apply alternate picking to promote consistent, efficient motion.\n\nHold the plectrum firmly between the thumb and index finger, ensuring that only a controlled portion extends beyond the fingers to support accuracy, stability, and a clear tone.",
      icon: (
        <MaterialCommunityIcons name="hand-clap" size={28} color="#81C784" />
      ),
      color: "#81C78420",
      borderColor: "#81C784",
    },
    {
      title: "3. Knowledge of the Instrument",
      description:
        "Develop a clear understanding of the essential parts and functions of the guitar:\n\n• **Headstock** – houses the machine heads (tuners) which adjust string tension and bring the instrument into tune.\n• **Neck and Fingerboard** – the playing surface where notes are fretted.\n• **Frets** – metal divisions that separate the fingerboard into semitone intervals.\n• **Body** – contributes to the resonance, projection, and overall tonal character of the instrument.\n• **Bridge** – anchors the strings and transfers their vibrations to the body.\n\nYou should also know how to tune the guitar accurately and learn the purpose of **marker dots**, which serve as visual reference points along the fingerboard to help with position awareness.\n\nUnderstand the term **action**, which refers to the height of the strings above the frets. Lower action generally allows for easier playing, while higher action can provide more dynamic range but requires greater pressure.\n\nBecome familiar with the basic ways to shape your tone:\n• Adjusting **pickup selector** to achieve brighter, warmer, or more balanced sounds.\n• Modifying the **tone and volume controls** on the guitar to refine clarity and color.\n• Changing the **picking-hand position**, moving closer to the bridge for a brighter, more focused sound or nearer the neck for a warmer, rounder tone.",
      icon: <FontAwesome5 name="guitar" size={26} color="#FFB74D" />,
      color: "#FFB74D20",
      borderColor: "#FFB74D",
    },
    {
      title: "4. Basic Functions on an Amplifier",
      description:
        "You should understand the purpose of the main amplifier controls:\n\n• Volume – adjusts the overall loudness of the signal.\n• Gain – increases the input level, adding drive, saturation, or distortion.\n• Tone – shapes the general brightness or warmth of the sound.\n\nMost amplifiers also provide an EQ (equalization) section:\n• Treble – controls the high-frequency content, affecting clarity, sparkle, and attack.\n• Middle – adjusts midrange frequencies, shaping body, presence, and how well the guitar sits in a mix.\n• Bass – controls the low-frequency response, influencing depth, warmth, and fullness.\n\nExample questions you should be able to answer:\n• What happens when you increase the gain?\n• How does adjusting the treble, middle, or bass change the overall tone?\n• What does the tone knob on the guitar do in relation to the amplifier?",
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
                <Text style={styles.mainTitle}>Grade 1 Spoken Tests</Text>
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
                  • Say note names out loud as you play them.
                </Text>
                <Text style={styles.tipText}>
                  • Keep your fingers curved and close to the strings.
                </Text>
                <Text style={styles.tipText}>
                  • Practice with both clean and slightly overdriven tones.
                </Text>
                <Text style={styles.tipText}>
                  • Record yourself to check clarity and consistency.
                </Text>
              </View>
            </View>
            <BackButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Grade1SpokenTests;

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
});
