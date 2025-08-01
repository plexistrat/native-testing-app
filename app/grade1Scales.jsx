import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const grade1Scales = () => {
  const [selectedScale, setSelectedScale] = useState("E minor pentatonic");

  const scales = {
    "E minor pentatonic": {
      notes: ["E", "G", "A", "B", "D"],
      positions: [
        { string: 6, fret: 0, note: "E" }, // 6th string open
        { string: 6, fret: 3, note: "G" }, // 6th string 3rd fret
        { string: 5, fret: 0, note: "A" }, // 5th string open
        { string: 5, fret: 2, note: "B" }, // 5th string 2nd fret
        { string: 4, fret: 0, note: "D" }, // 4th string open
        { string: 4, fret: 2, note: "E" }, // 4th string 2nd fret
        { string: 3, fret: 0, note: "G" }, // 3rd string open
        { string: 3, fret: 2, note: "A" }, // 3rd string 2nd fret
        { string: 2, fret: 0, note: "B" }, // 2nd string open
        { string: 2, fret: 3, note: "D" }, // 2nd string 3rd fret
        { string: 1, fret: 0, note: "E" }, // 1st string open
        { string: 1, fret: 3, note: "G" }, // 1st string 3rd fret
      ],
    },
    "E blues scale": {
      notes: ["E", "G", "A", "Bb", "B", "D"],
      positions: [
        { string: 6, fret: 0, note: "E" },
        { string: 6, fret: 3, note: "G" },
        { string: 5, fret: 0, note: "A" },
        { string: 5, fret: 1, note: "Bb" },
        { string: 5, fret: 2, note: "B" },
        { string: 4, fret: 0, note: "D" },
        { string: 4, fret: 2, note: "E" },
        { string: 3, fret: 0, note: "G" },
        { string: 3, fret: 2, note: "A" },
        { string: 3, fret: 3, note: "Bb" },
        { string: 2, fret: 0, note: "B" },
        { string: 2, fret: 3, note: "D" },
        { string: 1, fret: 0, note: "E" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
    "G major pentatonic": {
      notes: ["G", "A", "B", "D", "E"],
      positions: [
        { string: 6, fret: 3, note: "G" },
        { string: 5, fret: 0, note: "A" },
        { string: 5, fret: 2, note: "B" },
        { string: 4, fret: 0, note: "D" },
        { string: 4, fret: 2, note: "E" },
        { string: 3, fret: 0, note: "G" },
        { string: 3, fret: 2, note: "A" },
        { string: 2, fret: 0, note: "B" },
        { string: 2, fret: 3, note: "D" },
        { string: 1, fret: 0, note: "E" },
        { string: 1, fret: 3, note: "G" },
      ],
    },
    "A minor pentatonic": {
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
            <Text style={styles.stringLabelText}>Χορδή</Text>
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
          Επιλέξτε μια κλίμακα για να δείτε τις θέσεις στο grid
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
          <Text style={styles.notesLabel}>Νότες κλίμακας: </Text>
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
          <Text style={styles.legendText}>Root Note (Βασική νότα)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.scaleNoteDot]} />
          <Text style={styles.legendText}>Scale Notes (Νότες κλίμακας)</Text>
        </View>
      </View>
      <View>
        <Text style={styles.practiceTitle}>Scale practice</Text>
        <View style={styles.practiceInstructions}>
          <Text style={styles.practiceDescription}>
            Αργά & Σωστά (Slow Practice)
          </Text>
          <Text style={styles.practiceDescription}>
            Ξεκίνα πολύ αργά με μετρονόμο (π.χ. 50–60 BPM).
          </Text>
          <Text style={styles.practiceDescription}>
            Εστίασε στη σωστή δακτυλοθεσία και καθαρό ήχο.
          </Text>
          <Text style={styles.practiceDescription}>
            Μόλις νιώσεις άνετα, αύξησε σταδιακά την ταχύτητα.
          </Text>
          <Text style={styles.practiceDescription}>Με Ρυθμικά Patterns</Text>
          <Text style={styles.practiceDescription}>
            Παίξε την κλίμακα σε ρυθμούς (π.χ. δύο νότες ανά χτύπο, τρεις ανά
            χτύπο – triplets).
          </Text>
          <Text style={styles.practiceDescription}>Διαστήματα & Sequences</Text>
          <Text style={styles.practiceDescription}>
            Αντί να παίζεις απλά ανιούσα/κατιούσα, παίξε διαστήματα (π.χ. 1-3,
            2-4, 3-5).
          </Text>
          <Text style={styles.practiceDescription}>
            Παίξε σπασμένα μοτίβα (π.χ. 1-2-3/2-3-4…).
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

export default grade1Scales;
