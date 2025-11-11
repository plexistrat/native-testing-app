import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const grade3Arpeggios = () => {
  const [selectedArpeggio, setSelectedArpeggio] = useState(
    "G major (6th string root)"
  );

  const arpeggios = {
    "G major (6th string root)": {
      type: "Major",
      notes: ["G", "B", "D"],
      positions: [
        { string: 6, fret: 3, note: "G" },
        { string: 5, fret: 2, note: "B" },
        { string: 5, fret: 5, note: "D" },
        { string: 4, fret: 5, note: "C" },
        { string: 3, fret: 4, note: "B" },
        { string: 2, fret: 3, note: "D" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
    "G minor (6th string root)": {
      type: "Minor",
      notes: ["G", "Bb", "D"],
      positions: [
        { string: 6, fret: 3, note: "G" },
        { string: 6, fret: 6, note: "Bb" },
        { string: 5, fret: 5, note: "D" },
        { string: 4, fret: 5, note: "G" },
        { string: 3, fret: 3, note: "Bb" },
        { string: 2, fret: 3, note: "D" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const frets = Array.from({ length: 13 }, (_, i) => i);

  const isNoteActive = (string, fret) => {
    return arpeggios[selectedArpeggio].positions.some(
      (pos) => pos.string === string && pos.fret === fret
    );
  };

  const getNoteAtPosition = (string, fret) => {
    const position = arpeggios[selectedArpeggio].positions.find(
      (pos) => pos.string === string && pos.fret === fret
    );
    return position ? position.note : "";
  };

  const getRootNote = () => {
    return arpeggios[selectedArpeggio].notes[0];
  };

  const isRootNote = (note) => note === getRootNote();

  const renderFretboard = () => {
    return (
      <View style={styles.fretboardContainer}>
        {/* Fret numbers */}
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

        {/* Guitar strings */}
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grade 3 Guitar Arpeggios</Text>
      <Text style={styles.subtitle}>
        Select an arpeggio and view it on the fretboard grid
      </Text>

      {/* Arpeggio selector */}
      <View style={styles.scaleButtons}>
        {Object.keys(arpeggios).map((arp) => (
          <TouchableOpacity
            key={arp}
            onPress={() => setSelectedArpeggio(arp)}
            style={[
              styles.scaleButton,
              selectedArpeggio === arp && styles.selectedScaleButton,
            ]}
          >
            <Text
              style={[
                styles.scaleButtonText,
                selectedArpeggio === arp && styles.selectedScaleButtonText,
              ]}
            >
              {arp}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Arpeggio info */}
      <View style={styles.scaleInfo}>
        <Text style={styles.scaleTitle}>{selectedArpeggio}</Text>
        <Text style={styles.notesText}>
          Notes: {arpeggios[selectedArpeggio].notes.join(" - ")}
        </Text>
      </View>

      {/* Fretboard */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderFretboard()}
      </ScrollView>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.rootNoteDot]} />
          <Text style={styles.legendText}>Root Note</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.scaleNoteDot]} />
          <Text style={styles.legendText}>Arpeggio Notes</Text>
        </View>
      </View>

      {/* Practice instructions */}
      <Text style={styles.practiceTitle}>Practice Tips – Grade 3</Text>
      <View style={styles.practiceInstructions}>
        <Text style={styles.practiceDescription}>
          1. Start with slow, even picking along the arpeggio pattern.
        </Text>
        <Text style={styles.practiceDescription}>
          2. Focus on correct fingering, clear tone, and smooth transitions.
        </Text>
        <Text style={styles.practiceDescription}>
          3. Practice arpeggios in sequences (up-down, skipping strings).
        </Text>
        <Text style={styles.practiceDescription}>
          4. Explore arpeggios from different root notes across the fretboard.
        </Text>
        <Text style={styles.practiceDescription}>
          5. Incorporate arpeggios into improvisation and chord progressions.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#212529" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#DEE3E4",
    marginBottom: 20,
    textAlign: "center",
  },
  scaleButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 30,
  },
  scaleButton: {
    backgroundColor: "#2c3e50",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 5,
  },
  selectedScaleButton: {
    backgroundColor: "#20c997",
    shadowColor: "#20c997",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  scaleButtonText: { color: "#DEE3E4", fontSize: 14, fontWeight: "600" },
  selectedScaleButtonText: { color: "#fff" },
  scaleInfo: {
    backgroundColor: "#2c3e50",
    borderRadius: 12,
    marginBottom: 20,
    padding: 20,
  },
  scaleTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 10,
  },
  notesText: { color: "#DEE3E4", fontSize: 16 },
  fretboardContainer: {
    minWidth: 800,
    backgroundColor: "#F5DEB3",
    borderRadius: 8,
    padding: 15,
    borderWidth: 2,
    borderColor: "#DEB887",
  },
  fretNumbersRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  stringLabel: { width: 50, alignItems: "center", justifyContent: "center" },
  stringLabelText: { fontSize: 14, fontWeight: "bold", color: "#8B4513" },
  fretNumber: { width: 60, alignItems: "center", justifyContent: "center" },
  fretNumberText: { fontSize: 14, fontWeight: "bold", color: "#8B4513" },
  stringRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
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
    backgroundColor: "#20c997",
    shadowColor: "#20c997",
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
  noteText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  fretMarker: {
    position: "absolute",
    bottom: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B4513",
  },
  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 20,
  },
  legendItem: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  legendDot: { width: 16, height: 16, borderRadius: 8, marginRight: 8 },
  legendText: { color: "#DEE3E4", fontSize: 14 },
  practiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
  },
  practiceInstructions: { marginBottom: 30 },
  practiceDescription: { fontSize: 16, color: "#DEE3E4", marginBottom: 10 },
});

export default grade3Arpeggios;
