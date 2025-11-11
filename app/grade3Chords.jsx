import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const grade3Chords = () => {
  const [selectedChord, setSelectedChord] = useState(
    "F major (6th string root)"
  );

  const chords = {
    "F major (6th string root)": {
      type: "Major",
      notes: ["F", "A", "C"],
      color: "#4CAF50",
      frets: [1, 1, 2, 3, 3, 1],
      fingers: [1, 1, 3, 4, 2, 1],
      muted: [false, false, false, false, false, false],
    },
    "F minor (6th string root)": {
      type: "Minor",
      notes: ["F", "Ab", "C"],
      color: "#2196F3",
      frets: [1, 1, 1, 3, 3, 1],
      fingers: [1, 1, 1, 4, 2, 1],
      muted: [false, false, false, false, false, false],
    },
    "Bb major (5th string root)": {
      type: "Major",
      notes: ["Bb", "D", "F"],
      color: "#4CAF50",
      frets: [1, 3, 3, 3, 1, -1],
      fingers: [1, 3, 4, 2, 1, null],
      muted: [false, false, false, false, false, true],
    },
    "Bb minor (5th string root)": {
      type: "Minor",
      notes: ["Bb", "Db", "F"],
      color: "#2196F3",
      frets: [1, 2, 3, 3, 1, -1],
      fingers: [1, 2, 4, 3, 1, null],
      muted: [false, false, false, false, false, true],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const chordTypes = ["Major", "Minor"];

  const renderChordDiagram = () => {
    const chord = chords[selectedChord];

    return (
      <View style={styles.chordDiagram}>
        <Text style={[styles.chordName, { color: chord.color }]}>
          {selectedChord}
        </Text>

        <View style={styles.fretboard}>
          <View style={styles.stringsContainer}>
            {[0, 1, 2, 3, 4, 5].map((stringIndex) => (
              <View key={stringIndex} style={styles.stringLine}>
                <Text style={styles.stringLabel}>
                  {stringNames[stringIndex]}
                </Text>

                {chord.muted[stringIndex] && (
                  <Text style={styles.mutedIndicator}>✕</Text>
                )}

                {!chord.muted[stringIndex] &&
                  chord.frets[stringIndex] === 0 && (
                    <Text style={styles.openIndicator}>○</Text>
                  )}

                <View style={styles.fretPositions}>
                  {[1, 2, 3, 4].map((fretNum) => (
                    <View key={fretNum} style={styles.fretPosition}>
                      {chord.frets[stringIndex] === fretNum && (
                        <View
                          style={[
                            styles.fingerPosition,
                            { backgroundColor: chord.color },
                          ]}
                        >
                          <Text style={styles.fingerNumber}>
                            {chord.fingers[stringIndex]}
                          </Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>

                <View style={styles.stringWire} />
              </View>
            ))}
          </View>

          <View style={styles.fretNumbers}>
            <View style={styles.fretNumberSpace} />
            {[1, 2, 3, 4].map((num) => (
              <View key={num} style={styles.fretNumberContainer}>
                <Text style={styles.fretNumber}>{num}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const renderChordButtons = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {chordTypes.map((type) => (
          <View key={type} style={styles.chordCategory}>
            <Text style={styles.categoryTitle}>{type}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.chordButtonsScroll}
            >
              <View style={styles.chordButtons}>
                {Object.entries(chords)
                  .filter(([_, chord]) => chord.type === type)
                  .map(([chordName, chord]) => (
                    <TouchableOpacity
                      key={chordName}
                      style={[
                        styles.chordButton,
                        {
                          backgroundColor:
                            selectedChord === chordName ? chord.color : "#333",
                          borderColor: chord.color,
                        },
                      ]}
                      onPress={() => setSelectedChord(chordName)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.chordButtonText}>{chordName}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderChordInfo = () => {
    const chord = chords[selectedChord];

    return (
      <View style={styles.chordInfo}>
        <Text style={[styles.chordTitle, { color: chord.color }]}>
          {selectedChord}
        </Text>
        <Text style={styles.chordType}>Type: {chord.type}</Text>
        <Text style={styles.chordNotes}>Notes: {chord.notes.join(" - ")}</Text>

        <View style={styles.fingeringGuide}>
          <Text style={styles.fingeringTitle}>Fingering Guide:</Text>
          <Text style={styles.fingeringTips}>○ = Open string</Text>
          <Text style={styles.fingeringTips}>✕ = Muted string</Text>
          <Text style={styles.fingeringTips}>1,2,3,4 = Finger numbers</Text>
          <Text style={styles.fingeringTips}>
            1=Index, 2=Middle, 3=Ring, 4=Pinky
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>🎸 Guitar Chords — Grade 3</Text>
      <Text style={styles.subtitle}>Barre Chords (5th & 6th String Roots)</Text>

      {renderChordButtons()}
      {renderChordInfo()}
      {renderChordDiagram()}
      <View style={styles.practiceContainer}>
        <Text style={styles.title}>Chords Practice</Text>
        <Text style={styles.subtitle}>1. Build Finger Strength</Text>
        <Text style={styles.description}>
          Start with clean pressure across the barre. Play each string slowly.
          If a note is buzzing, adjust finger angle and thumb placement.
        </Text>
        <Text style={styles.subtitle}>2. Control Your Barre</Text>
        <Text style={styles.description}>
          Practice lifting and placing the barre on its own. Goal: smooth, quiet
          movement between shapes without squeezing too hard.
        </Text>
        <Text style={styles.subtitle}>3. Major & Minor Shapes</Text>
        <Text style={styles.description}>
          The root stays the same. Switch between major and minor by only
          adjusting the middle and ring fingers. Example: F major ↔ F minor.
        </Text>
        <Text style={styles.subtitle}>4. Move the Shape Along the Neck</Text>
        <Text style={styles.description}>
          Pick one shape and slide it to 3 different frets. This shows how one
          shape becomes many chords.
        </Text>
        <Text style={styles.subtitle}>5. Simple Grade 3 Progressions</Text>
        <Text style={styles.description}>
          F – Bb – C{"\n"}G – C – D{"\n"}
          Am – F – G{"\n"}
          Dm – Bb – C
        </Text>
        <Text style={styles.subtitle}>6. Right-Hand Consistency</Text>
        <Text style={styles.description}>
          Use one steady strumming pattern. Focus on keeping volume even while
          your left hand is working hard.
        </Text>
        <Text style={styles.subtitle}>7. 10-Minute Routine</Text>
        <Text style={styles.description}>
          Warm-up → Play 3 barre shapes slowly.{"\n"}
          Changes → Move between two chords for 2 minutes.{"\n"}
          Progression → Pick one pattern and loop it.{"\n"}
          Finish → Play along with a slow backing track.
        </Text>
        <Text style={styles.subtitle1}>Tip:</Text>
        <Text style={styles.description1}>
          Keep your thumb behind the center of the neck, not wrapped over the
          top. This gives power and keeps your hand relaxed.
        </Text>
        <Text style={styles.subtitle1}>Song Suggestions</Text>
        <Text style={styles.description1}>
          Zombie – The Cranberries{"\n"}
          Creep – Radiohead{"\n"}
          Thrill is Gone – BB King{"\n"}
          Layla – Eric Clapton {"\n"}
          Boulevard of Broken Dreams – Green Day
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
  },
  practiceContainer: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ccc",
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ccc",
    marginBottom: 20,
  },
  description: {
    fontSize: 12,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  description1: {
    fontSize: 12,
    color: "#ccc",
    marginBottom: 10,
  },
  tip: {
    fontSize: 12,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  chordCategory: {
    backgroundColor: "rgba(42, 42, 42, 0.8)",
    margin: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  chordButtonsScroll: {
    flexGrow: 0,
  },
  chordButtons: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  chordButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    minWidth: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  chordButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  chordInfo: {
    backgroundColor: "rgba(42, 42, 42, 0.8)",
    margin: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  chordTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  chordType: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 8,
  },
  chordNotes: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  fingeringGuide: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 15,
    borderRadius: 10,
  },
  fingeringTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  fingeringTips: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 5,
  },
  chordDiagram: {
    backgroundColor: "rgba(42, 42, 42, 0.9)",
    margin: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
  },
  chordName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  fretboard: {
    backgroundColor: "#4e5651ff",
    borderRadius: 10,
    padding: 20,
    width: width - 60,
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 16,
  },
  stringsContainer: {
    position: "relative",
  },
  stringLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    height: 40,
    position: "relative",
  },
  stringWire: {
    position: "absolute",
    left: 50,
    right: 0,
    top: "50%",
    height: 2,
    backgroundColor: "#C0C0C0",
    transform: [{ translateY: -1 }],
    zIndex: -1,
  },
  stringLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#333",
    width: 30,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 15,
    marginRight: 15,
  },
  mutedIndicator: {
    position: "absolute",
    left: 55,
    top: -5,
    fontSize: 20,
    color: "#FF4444",
    fontWeight: "bold",
  },
  openIndicator: {
    position: "absolute",
    left: 55,
    top: -5,
    fontSize: 20,
    color: "#44FF44",
    fontWeight: "bold",
  },
  fretPositions: {
    flexDirection: "row",
    position: "absolute",
    left: 80,
    right: 0,
  },
  fretPosition: {
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  fingerPosition: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  fingerNumber: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  fretNumbers: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  fretNumberSpace: {
    width: 95,
  },
  fretNumberContainer: {
    width: 50,
    alignItems: "center",
  },
  fretNumber: {
    color: "#ccc",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default grade3Chords;
