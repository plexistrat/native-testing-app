import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const grade2Scales = () => {
  const [selectedScale, setSelectedScale] = useState("A blues scale");

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
  const frets = Array.from({ length: 13 }, (_, i) => i); // 0-12 frets

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
                {/* Fret line */}
                {fret > 0 && <View style={styles.fretLine} />}

                {/* String line */}
                <View style={styles.stringLine} />

                {/* Note dot */}
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

                {/* Fret markers */}
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
      <View style={styles.header}>
        <Text style={styles.title}>Grade 1 Guitar Scales</Text>
        <Text style={styles.subtitle}>
          Select a scale and view it on the fretboard grid
        </Text>
      </View>

      {/* Scale selector buttons */}
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
                selectedScale === scale && styles.selectedScaleButtonText,
              ]}
            >
              {scale}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Current scale info */}
      <View style={styles.scaleInfo}>
        <Text style={styles.scaleTitle}>{selectedScale}</Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notesLabel}>Scale notes: </Text>
          <Text style={styles.notesText}>
            {scales[selectedScale].notes.join(" - ")}
          </Text>
        </View>
      </View>

      {/* Fretboard */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.fretboardScroll}
      >
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
          <Text style={styles.legendText}>Scale Notes</Text>
        </View>
      </View>
      <View>
        <Text style={styles.practiceTitle}>Scale practice</Text>
        <View style={styles.practiceInstructions}>
          <Text style={styles.practiceDescription}>Slow Practice</Text>
          <Text style={styles.practiceDescription}>
            Start with a slow tempo (50–60 BPM on the metronome ).
          </Text>
          <Text style={styles.practiceDescription}>
            Focus on the correct fingering and clear sound.
          </Text>
          <Text style={styles.practiceDescription}>
            Once you fell comfortable, increase the tempo.
          </Text>
          <Text style={styles.practiceDescription}>
            Play the scale with rhythm patterns (for example eights, triplets,
            sixteenths).
          </Text>
          <Text style={styles.practiceDescription}>
            Intervals and sequences
          </Text>
          <Text style={styles.practiceDescription}>
            Instead of playing the whole scale up and down, play intervals (for
            example 1-3, 2-4, 3-5).
          </Text>
          <Text style={styles.practiceDescription}>
            Play sequences (for example 1-2-3/2-3-4…).
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 20,
    border: "1px solid #20c997",
    borderRadius: 8,
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    width: "74%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    width: "74%",
    fontSize: 16,
    color: "#DEE3E4",
    marginBottom: 20,
    textAlign: "center",
  },
  scaleButtons: {
    width: "74%",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    marginBottom: 30,
    gap: 10,
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
  scaleButtonText: {
    color: "#DEE3E4",
    fontSize: 14,
    fontWeight: "600",
  },
  selectedScaleButtonText: {
    color: "#ffffff",
  },
  scaleInfo: {
    width: "74%",
    backgroundColor: "#2c3e50",
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#20c997",
    padding: 20,
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
  notesLabel: {
    color: "#DEE3E4",
    fontSize: 16,
  },
  notesText: {
    color: "#20c997",
    fontSize: 16,
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
    width: "74%",
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
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
  practiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 30,
    marginTop: 30,
  },
  practiceInstructions: {
    width: "74%",
    fontSize: 18,
    color: "#DEE3E4",
    marginBottom: 20,
  },
  practiceDescription: {
    fontSize: 16,
    color: "#DEE3E4",
    marginBottom: 20,
  },
});

export default grade2Scales;
