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
import BackButton from "./components/BackButton";

const grade2Scales = () => {
  const [selectedScale, setSelectedScale] = useState("G blues scale");

  const scales = {
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
      ],
    },
    "G blues scale": {
      notes: ["G", "Bb", "C", "Db", "D", "F"],
      positions: [
        { string: 6, fret: 3, note: "G" },
        { string: 6, fret: 6, note: "Bb" },
        { string: 5, fret: 3, note: "C" },
        { string: 5, fret: 4, note: "Db" },
        { string: 5, fret: 5, note: "D" },
        { string: 4, fret: 3, note: "F" },
        { string: 4, fret: 5, note: "G" },
        { string: 3, fret: 3, note: "Bb" },
        { string: 3, fret: 5, note: "C" },
        { string: 3, fret: 6, note: "Db" },
        { string: 2, fret: 3, note: "D" },
        { string: 2, fret: 6, note: "F" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
    "B minor pentatonic scale": {
      notes: ["B", "D", "E", "F#", "A"],
      positions: [
        { string: 6, fret: 7, note: "B" },
        { string: 6, fret: 10, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 5, fret: 9, note: "F#" },
        { string: 4, fret: 7, note: "A" },
        { string: 4, fret: 9, note: "B" },
        { string: 3, fret: 7, note: "D" },
        { string: 3, fret: 9, note: "E" },
        { string: 2, fret: 7, note: "F#" },
        { string: 2, fret: 10, note: "A" },
        { string: 1, fret: 7, note: "B" },
      ],
    },
    "D major pentatonic scale": {
      notes: ["D", "E", "F#", "A", "B"],
      positions: [
        { string: 6, fret: 10, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 5, fret: 9, note: "F#" },
        { string: 4, fret: 7, note: "A" },
        { string: 4, fret: 9, note: "B" },
        { string: 3, fret: 7, note: "D" },
        { string: 3, fret: 9, note: "E" },
        { string: 2, fret: 7, note: "F#" },
        { string: 2, fret: 10, note: "A" },
        { string: 1, fret: 7, note: "B" },
        { string: 1, fret: 10, note: "D" },
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
    "C major scale": {
      notes: ["C", "D", "E", "F", "G", "A", "B"],
      positions: [
        { string: 6, fret: 8, note: "C" },
        { string: 6, fret: 10, note: "D" },
        { string: 5, fret: 7, note: "E" },
        { string: 5, fret: 8, note: "F" },
        { string: 5, fret: 10, note: "G" },
        { string: 4, fret: 7, note: "A" },
        { string: 4, fret: 9, note: "B" },
        { string: 4, fret: 10, note: "C" },
        { string: 3, fret: 7, note: "D" },
        { string: 3, fret: 9, note: "E" },
        { string: 3, fret: 10, note: "F" },
        { string: 2, fret: 8, note: "G" },
        { string: 2, fret: 10, note: "A" },
        { string: 1, fret: 7, note: "B" },
        { string: 1, fret: 8, note: "C" },
      ],
    },
    "G major scale": {
      notes: ["G", "A", "B", "C", "D", "E", "F#"],
      positions: [
        { string: 6, fret: 3, note: "G" },
        { string: 6, fret: 5, note: "A" },
        { string: 5, fret: 2, note: "B" },
        { string: 5, fret: 3, note: "C" },
        { string: 5, fret: 5, note: "D" },
        { string: 4, fret: 2, note: "E" },
        { string: 4, fret: 4, note: "F#" },
        { string: 4, fret: 5, note: "G" },
        { string: 3, fret: 2, note: "A" },
        { string: 3, fret: 4, note: "B" },
        { string: 3, fret: 5, note: "C" },
        { string: 2, fret: 3, note: "D" },
        { string: 2, fret: 5, note: "E" },
        { string: 1, fret: 2, note: "F#" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const frets = Array.from({ length: 13 }, (_, i) => i);

  const isNoteActive = (string, fret) => {
    return scales[selectedScale].positions.some(
      (pos) => pos.string === string && pos.fret === fret
    );
  };

  const getNoteAtPosition = (string, fret) => {
    const position = scales[selectedScale].positions.find(
      (pos) => pos.string === string && pos.fret === fret
    );
    return position ? position.note : "";
  };

  const getRootNote = () => {
    return scales[selectedScale].notes[0];
  };

  const isRootNote = (note) => {
    return note === getRootNote();
  };

  const renderFretboard = () => {
    return (
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
  };

  return (
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.title}>Grade 2 Scales</Text>
                <Text style={styles.subtitle}>
                  Select a scale and view it on the fretboard grid
                </Text>
              </View>

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

              <View style={styles.scaleInfo}>
                <Text style={styles.scaleTitle}>{selectedScale}</Text>
                <View style={styles.notesContainer}>
                  <Text style={styles.notesLabel}>Scale notes: </Text>
                  <Text style={styles.notesText}>
                    {scales[selectedScale].notes.join(" - ")}
                  </Text>
                </View>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.fretboardScroll}
              >
                {renderFretboard()}
              </ScrollView>

              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.rootNoteDot]} />
                  <Text style={styles.legendText}>Root Note</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.scaleNoteDot]} />
                  <Text style={styles.legendText}>Scale Notes</Text>
                </View>
              </View>

              <View style={styles.practiceSection}>
                <Text style={styles.practiceTitle}>Scale Practice</Text>

                <View style={styles.practiceInstructions}>
                  <Text style={styles.practiceDescriptionTitle}>
                    Foundational Tempo Work
                  </Text>
                  <Text style={styles.practiceDescription}>
                    Begin practicing the scale at a slow, controlled tempo
                    (50–60 BPM). Focus on consistent tone, clean articulation,
                    and steady timing.
                  </Text>

                  <Text style={styles.practiceDescriptionTitle}>
                    Gradual Speed Development
                  </Text>
                  <Text style={styles.practiceDescription}>
                    Once the scale feels comfortable, gradually increase the
                    tempo in small increments. Prioritize accuracy over speed to
                    build reliable technique.
                  </Text>

                  <Text style={styles.practiceDescriptionTitle}>
                    Rhythmic Variations
                  </Text>
                  <Text style={styles.practiceDescription}>
                    Practice the scale using different rhythmic patterns such as
                    eighth notes, triplets, and sixteenth notes. This helps
                    develop precision and flexibility in both hands.
                  </Text>

                  <Text style={styles.practiceDescriptionTitle}>
                    Intervals & Sequences
                  </Text>
                  <Text style={styles.practiceDescription}>
                    Strengthen your fretboard awareness by practicing
                    interval-based patterns (for example: 1–3, 2–4, 3–5).
                  </Text>
                  <Text style={styles.practiceDescription}>
                    Add sequential patterns as well, such as 1–2–3 / 2–3–4 /
                    3–4–5, to develop flow and musical phrasing.
                  </Text>
                </View>
              </View>
            </View>
            <BackButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    position: "relative",
    minHeight: "auto",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 10,
    alignItems: "center",
  },

  orb1: {
    position: "absolute",
    top: 100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(99, 101, 241, 0.54)",
    opacity: 0.9,
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
    backgroundColor: "rgba(169, 85, 247, 0.47)",
    opacity: 0.8,
    shadowColor: "#a855f7",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 70,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  title: {
    width: "100%",
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    width: "100%",
    fontSize: 14,
    color: "#DEE3E4",
    marginBottom: 10,
    textAlign: "center",
  },
  scaleButtons: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
    gap: 6,
  },
  scaleButton: {
    backgroundColor: "rgba(44, 62, 80, 0.8)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    margin: 4,
  },

  selectedScaleButton: {
    backgroundColor: "#4A90E2",
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  scaleButtonText: {
    color: "#DEE3E4",
    fontSize: 14,
    fontWeight: "600",
  },
  selectedScaleButtonText: {
    color: "#ffffff",
  },
  scaleInfo: {
    width: "100%",
    backgroundColor: "rgba(44, 62, 80, 0.8)",
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
    padding: 12,
  },
  scaleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 8,
  },

  notesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  notesLabel: {
    color: "#DEE3E4",
    fontSize: 14,
  },
  notesText: {
    color: "#4A90E2",
    fontSize: 14,
    fontWeight: "600",
  },
  fretboardScroll: {
    marginBottom: 20,
  },
  fretboardContainer: {
    backgroundColor: "#F5DEB3",
    borderRadius: 8,
    padding: 15,
    borderWidth: 2,
    borderColor: "#DEB887",
    minWidth: 800,
  },
  fretNumbersRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  stringLabel: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  stringLabelText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8B4513",
  },
  fretNumber: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  fretNumberText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8B4513",
  },
  stringRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  fretCell: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  fretLine: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#8B4513",
  },
  stringLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#696969",
  },
  noteDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  rootNoteDot: {
    backgroundColor: "#004cffff",
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  scaleNoteDot: {
    backgroundColor: "#3498db",
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  noteText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  fretMarker: {
    position: "absolute",
    bottom: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B4513",
  },
  legend: {
    width: "100%",
    backgroundColor: "rgba(44, 62, 80, 0.8)",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 16,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    color: "#DEE3E4",
    fontSize: 14,
  },
  practiceSection: {
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
  },
  practiceTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 16,
  },
  practiceDescription: {
    fontSize: 15,
    color: "#DEE3E4",
    marginBottom: 16,
    lineHeight: 22,
  },
  practiceDescriptionTitle: {
    fontSize: 17,
    color: "#4A90E2",
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 4,
  },
});

export default grade2Scales;
