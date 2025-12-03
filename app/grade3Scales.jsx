import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "./components/BackButton";

export default function Grade3Scales() {
  const [selectedScale, setSelectedScale] = useState("A major scale");

  // ---------------------------------------------------------
  // SCALE DATA
  // ---------------------------------------------------------
  const scales = {
    "A major scale": {
      notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
      positions: [
        { string: 6, fret: 5, note: "A" },
        { string: 6, fret: 7, note: "B" },
        { string: 5, fret: 4, note: "C#" },
        { string: 5, fret: 5, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 4, fret: 4, note: "F#" },
        { string: 4, fret: 6, note: "G#" },
        { string: 4, fret: 7, note: "A" },
        { string: 3, fret: 4, note: "B" },
        { string: 3, fret: 6, note: "C#" },
        { string: 3, fret: 7, note: "D" },
        { string: 2, fret: 5, note: "E" },
        { string: 2, fret: 7, note: "F#" },
        { string: 1, fret: 4, note: "G#" },
        { string: 1, fret: 5, note: "A" },
      ],
    },

    "A natural minor scale": {
      notes: ["A", "B", "C", "D", "E", "F", "G"],
      positions: [
        { string: 6, fret: 5, note: "A" },
        { string: 6, fret: 7, note: "B" },
        { string: 6, fret: 8, note: "C" },
        { string: 5, fret: 5, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 5, fret: 8, note: "F" },
        { string: 4, fret: 5, note: "G" },
        { string: 4, fret: 7, note: "A" },
        { string: 3, fret: 4, note: "B" },
        { string: 3, fret: 5, note: "C" },
        { string: 3, fret: 7, note: "D" },
        { string: 2, fret: 4, note: "E" },
        { string: 2, fret: 5, note: "F" },
        { string: 2, fret: 8, note: "G" },
        { string: 1, fret: 5, note: "A" },
      ],
    },

    "A minor pentatonic scale": {
      notes: ["A", "C", "D", "E", "G"],
      positions: [
        { string: 6, fret: 5, note: "A" },
        { string: 6, fret: 8, note: "C" },
        { string: 5, fret: 5, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 4, fret: 5, note: "G" },
        { string: 4, fret: 7, note: "A" },
        { string: 3, fret: 5, note: "C" },
        { string: 3, fret: 7, note: "D" },
        { string: 2, fret: 5, note: "E" },
        { string: 2, fret: 8, note: "G" },
        { string: 1, fret: 5, note: "A" },
        { string: 1, fret: 8, note: "C" },
      ],
    },

    "A blues scale": {
      notes: ["A", "C", "D", "Eb", "E", "G"],
      positions: [
        { string: 6, fret: 5, note: "A" },
        { string: 6, fret: 8, note: "C" },
        { string: 5, fret: 5, note: "D" },
        { string: 5, fret: 6, note: "Eb" },
        { string: 5, fret: 7, note: "E" },
        { string: 4, fret: 5, note: "G" },
        { string: 4, fret: 7, note: "A" },
        { string: 3, fret: 5, note: "C" },
        { string: 3, fret: 7, note: "D" },
        { string: 3, fret: 8, note: "Eb" },
        { string: 2, fret: 5, note: "E" },
        { string: 2, fret: 8, note: "G" },
        { string: 1, fret: 5, note: "A" },
        { string: 1, fret: 8, note: "C" },
      ],
    },

    "A major pentatonic scale": {
      notes: ["A", "B", "C#", "E", "F#"],
      positions: [
        { string: 6, fret: 5, note: "A" },
        { string: 5, fret: 2, note: "B" },
        { string: 5, fret: 4, note: "C#" },
        { string: 4, fret: 2, note: "E" },
        { string: 4, fret: 4, note: "F#" },
        { string: 3, fret: 2, note: "A" },
        { string: 3, fret: 4, note: "B" },
        { string: 2, fret: 2, note: "C#" },
        { string: 2, fret: 5, note: "E" },
        { string: 1, fret: 2, note: "F#" },
        { string: 1, fret: 5, note: "A" },
      ],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const frets = Array.from({ length: 13 }, (_, i) => i);

  const isNoteActive = (string, fret) =>
    scales[selectedScale].positions.some(
      (pos) => pos.string === string && pos.fret === fret
    );

  const getNoteAtPosition = (string, fret) => {
    const position = scales[selectedScale].positions.find(
      (pos) => pos.string === string && pos.fret === fret
    );
    return position ? position.note : "";
  };

  const isRootNote = (note) => note === scales[selectedScale].notes[0];

  // ---------------------------------------------------------
  // FRETBOARD RENDER
  // ---------------------------------------------------------
  const renderFretboard = () => (
    <View style={styles.fretboardContainer}>
      <View style={styles.fretNumbersRow}>
        <View style={styles.stringLabel}>
          <Text style={styles.stringLabelText}>String</Text>
        </View>

        {frets.map((fret) => (
          <View key={fret} style={styles.fretNumber}>
            <Text style={styles.fretNumberText}>{fret}</Text>
          </View>
        ))}
      </View>

      {[1, 2, 3, 4, 5, 6].map((string) => (
        <View key={string} style={styles.stringRow}>
          <View style={styles.stringLabel}>
            <Text style={styles.stringLabelText}>
              {stringNames[string - 1]}
            </Text>
          </View>

          {frets.map((fret) => (
            <View key={fret} style={styles.fretCell}>
              {fret > 0 && <View style={styles.fretLine} />}
              <View style={styles.stringLine} />

              {isNoteActive(string, fret) && (
                <View
                  style={[
                    styles.noteDot,
                    isRootNote(getNoteAtPosition(string, fret))
                      ? styles.rootNoteDot
                      : styles.scaleNoteDot,
                  ]}
                >
                  <Text style={styles.noteText}>
                    {getNoteAtPosition(string, fret)}
                  </Text>
                </View>
              )}

              {string === 6 && [3, 5, 7, 9, 12].includes(fret) && (
                <View style={styles.fretMarker} />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  // ---------------------------------------------------------
  // PAGE UI
  // ---------------------------------------------------------
  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            {/* Background Orbs */}
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.title}>Grade 3 Scales</Text>
                <Text style={styles.subtitle}>
                  Select a scale and view it on the fretboard grid
                </Text>
              </View>

              {/* SCALE SELECTOR */}
              <View style={styles.scaleButtons}>
                {Object.keys(scales).map((scale) => (
                  <TouchableOpacity
                    key={scale}
                    onPress={() => setSelectedScale(scale)}
                    style={[
                      styles.scaleButton,
                      selectedScale === scale && styles.selectedScaleButton,
                    ]}
                  >
                    <Text
                      style={[
                        styles.scaleButtonText,
                        selectedScale === scale &&
                          styles.selectedScaleButtonText,
                      ]}
                    >
                      {scale}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* SCALE INFO */}
              <View style={styles.scaleInfo}>
                <Text style={styles.scaleTitle}>{selectedScale}</Text>
                <View style={styles.notesContainer}>
                  <Text style={styles.notesLabel}>Notes: </Text>
                  <Text style={styles.notesText}>
                    {scales[selectedScale].notes.join(" - ")}
                  </Text>
                </View>
              </View>

              {/* FRETBOARD */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {renderFretboard()}
              </ScrollView>

              {/* LEGEND */}
              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.rootNoteDot]} />
                  <Text style={styles.legendText}>Root</Text>
                </View>

                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.scaleNoteDot]} />
                  <Text style={styles.legendText}>Scale note</Text>
                </View>
              </View>

              {/* PRACTICE ROUTINE */}
              <View style={styles.practiceSection}>
                <Text style={styles.practiceTitle}>Scale Practice Tips</Text>

                <PracticeTip
                  icon="speed"
                  title="Foundational Tempo Work"
                  text="Start slow (50–60 BPM). Focus on tone, clarity, and even timing."
                />

                <PracticeTip
                  icon="trending-up"
                  title="Gradual Speed Building"
                  text="Increase the tempo in small steps. Avoid rushing — accuracy first."
                />

                <PracticeTip
                  icon="format-list-numbered"
                  title="Intervals & Patterns"
                  text="Practice interval skips (1–3, 2–4) and short sequences (1-2-3, 2-3-4)."
                />

                <PracticeTip
                  icon="waves"
                  title="Rhythmic Variations"
                  text="Play with different rhythms: eighth notes, triplets, sixteenths."
                />

                {/* DAILY ROUTINE */}
                <View style={styles.dailyRoutine}>
                  <Text style={styles.dailyRoutineTitle}>
                    Daily Routine (12 minutes)
                  </Text>

                  <DailyItem minutes="3" text="Slow warm-up at 50–60 BPM" />
                  <DailyItem minutes="3" text="Medium tempo (70–90 BPM)" />
                  <DailyItem minutes="3" text="Sequences & intervals" />
                  <DailyItem
                    minutes="3"
                    text="One fast attempt with full control"
                  />
                </View>
              </View>
            </View>
            <BackButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

// ---------------------------------------------------------
// REUSABLE COMPONENTS
// ---------------------------------------------------------
function PracticeTip({ icon, title, text }) {
  return (
    <View style={styles.practiceItem}>
      <MaterialIcons
        name={icon}
        size={26}
        color="#20c997"
        style={styles.practiceIcon}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.practiceDescriptionTitle}>{title}</Text>
        <Text style={styles.practiceDescription}>{text}</Text>
      </View>
    </View>
  );
}

function DailyItem({ minutes, text }) {
  return (
    <View style={styles.dailyItem}>
      <MaterialIcons name="timer" size={22} color="#20c997" />
      <Text style={styles.dailyItemText}>
        <Text style={{ color: "#20c997", fontWeight: "700" }}>
          {minutes} min
        </Text>{" "}
        — {text}
      </Text>
    </View>
  );
}

// ---------------------------------------------------------
// STYLES
// ---------------------------------------------------------
const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: { position: "relative", minHeight: "auto" },
  content: { padding: 8, alignItems: "center" },

  // BACKGROUND ORBS
  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(99, 102, 241, 0.15)",
  },
  orb2: {
    position: "absolute",
    bottom: 150,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(168, 85, 247, 0.12)",
  },

  // HEADERS
  header: { alignItems: "center", marginBottom: 10, marginTop: 10 },
  title: {
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    width: "100%",
    maxWidth: 320, // <- limits line width
    fontSize: 16,
    color: "#DEE3E4",
    marginBottom: 10,
    textAlign: "center",
    alignSelf: "center",
  },

  // SCALE BUTTONS
  scaleButtons: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    gap: 8,
  },
  scaleButton: {
    backgroundColor: "rgba(44, 62, 80, 0.8)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 5,
  },
  selectedScaleButton: {
    backgroundColor: "#20c997",
    shadowColor: "#20c997",
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  scaleButtonText: { color: "#DEE3E4", fontSize: 14, fontWeight: "600" },
  selectedScaleButtonText: { color: "#ffffff" },

  // SCALE INFO
  scaleInfo: {
    width: "100%",
    backgroundColor: "rgba(44, 62, 80, 0.8)",
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#20c997",
    padding: 18,
  },
  scaleTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 15,
  },
  notesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  notesLabel: { color: "#DEE3E4", fontSize: 16 },
  notesText: { color: "#20c997", fontSize: 16, fontWeight: "600" },

  // FRETBOARD
  fretboardContainer: {
    backgroundColor: "#F5DEB3",
    borderRadius: 8,
    padding: 15,
    minWidth: 800,
    borderWidth: 2,
    borderColor: "#DEB887",
  },
  fretNumbersRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  stringLabel: { width: 50, alignItems: "center" },
  stringLabelText: { fontSize: 14, fontWeight: "bold", color: "#8B4513" },
  fretNumber: { width: 60, alignItems: "center" },
  fretNumberText: { fontSize: 14, fontWeight: "bold", color: "#8B4513" },

  stringRow: { flexDirection: "row", marginBottom: 2 },
  fretCell: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  fretLine: {
    position: "absolute",
    width: 2,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#8B4513",
  },
  stringLine: {
    position: "absolute",
    height: 2,
    left: 0,
    right: 0,
    backgroundColor: "#696969",
  },

  noteDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  rootNoteDot: { backgroundColor: "#20c997" },
  scaleNoteDot: { backgroundColor: "#3498db" },
  noteText: { color: "#ffffff", fontSize: 12, fontWeight: "bold" },

  fretMarker: {
    position: "absolute",
    bottom: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B4513",
  },

  // PRACTICE SECTION
  practiceSection: { width: "100%", marginTop: 20 },
  practiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
  },

  practiceItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "flex-start",
    gap: 12,
  },
  practiceIcon: { marginTop: 4 },
  practiceDescriptionTitle: {
    fontSize: 18,
    color: "#20c997",
    fontWeight: "700",
    marginBottom: 4,
  },
  practiceDescription: { fontSize: 16, color: "#DEE3E4", lineHeight: 22 },

  // DAILY ROUTINE
  dailyRoutine: {
    marginTop: 25,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "rgba(44, 62, 80, 0.85)",
    borderColor: "#20c997",
    borderWidth: 1,
  },
  dailyRoutineTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 15,
  },
  dailyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  dailyItemText: { color: "#DEE3E4", fontSize: 16 },
});
