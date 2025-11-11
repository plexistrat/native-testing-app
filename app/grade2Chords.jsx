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

const grade2Chords = () => {
  const [selectedChord, setSelectedChord] = useState("F");

  const chords = {
    F: {
      type: "Major",
      notes: ["F", "A", "C"],
      color: "#4CAF50",
      frets: [1, 1, 2, 3, 0, 0],
      fingers: [1, 1, 2, 3, null, null],
      muted: [false, false, false, false, true, true],
    },
    Bm: {
      type: "Minor",
      notes: ["B", "D", "F#"],
      color: "#2196F3",
      frets: [2, 3, 4, 4, -1, -1],
      fingers: [1, 2, 4, 3, null, null],
      muted: [false, false, false, false, true, true],
    },
    C7: {
      type: "Dominant 7th",
      notes: ["C", "E", "G", "Bb"],
      color: "#FF9800",
      frets: [0, 1, 3, 2, 3, -1],
      fingers: [null, 1, 4, 2, 3, null],
      muted: [false, false, false, false, false, true],
    },
    G7: {
      type: "Dominant 7th",
      notes: ["G", "B", "D", "F"],
      color: "#FF9800",
      frets: [1, 0, 0, 0, 2, 3],
      fingers: [1, null, null, null, 3, 2],
      muted: [false, false, false, false, false, false],
    },
    Fmaj7: {
      type: "Major 7th",
      notes: ["F", "A", "C", "E"],
      color: "#9C27B0",
      frets: [0, 1, 2, 3, -1, -1],
      fingers: [null, 1, 2, 3, null, null],
      muted: [false, false, false, false, true, true],
    },
    Gmaj7: {
      type: "Major 7th",
      notes: ["G", "B", "D", "F#"],
      color: "#9C27B0",
      frets: [2, 0, 0, 0, 2, 3],
      fingers: [2, null, null, null, 3, 2],
      muted: [false, false, false, false, false, false],
    },
    Em7: {
      type: "Minor 7th",
      notes: ["E", "G", "B", "D"],
      color: "#bb6551ff",
      frets: [0, 0, 0, 0, 0, 2, 0],
      fingers: [null, null, null, null, null, 1, null],
      muted: [false, false, false, false, false, false],
    },
    Am7: {
      type: "Minor 7th",
      notes: ["A", "C", "E", "G"],
      color: "#bb6551ff",
      frets: [0, 1, 0, 2, 0, -1],
      fingers: [null, 1, null, 2, null, null],
      muted: [false, false, false, false, false, true],
    },
    Dm7: {
      type: "Minor 7th",
      notes: ["D", "F", "A", "C"],
      color: "#bb6551ff",
      frets: [1, 1, 2, 0, -1, -1],
      fingers: [1, 1, 2, null, null, null],
      muted: [false, false, false, false, true, true],
    },
    "F#m": {
      type: "Minor",
      notes: ["F#", "A", "C#", "E"],
      color: "#2196F3",
      frets: [2, 2, 2, 4, -1, -1],
      fingers: [1, 1, 1, 3, null, null],
      muted: [false, false, false, false, true, true],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const chordTypes = [
    "Major",
    "Minor",
    "Dominant 7th",
    "Major 7th",
    "Minor 7th",
  ];

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
      <Text style={styles.title}>🎸 Guitar Chords — Grade 2</Text>
      <Text style={styles.subtitle}>
        Grade 2: Barre Prep, 7th Chords, Shape Control
      </Text>

      {renderChordButtons()}
      {renderChordInfo()}
      {renderChordDiagram()}
      <View style={styles.practiceContainer}>
        <Text style={styles.title}>Practice Section</Text>
        <Text style={styles.subtitle}>1. Strengthen Finger Independence</Text>
        <Text style={styles.description}>
          Start by pressing two-note shapes (dyads) cleanly:{"\n"}1 + 2{"\n"} 1
          + 3{"\n"} 2 + 4{"\n"}
          These small shapes make barre and 7th chords easier later.
        </Text>

        <Text style={styles.subtitle}>2. Smooth Shape Placement</Text>
        <Text style={styles.description}>
          Pick one chord (like Bm). Place fingers all together, not one at a
          time. Aim for clean sound using slow, steady strumming.
        </Text>
        <Text style={styles.subtitle}>3. Expand Your Chord Library</Text>
        <Text style={styles.description}>
          Minor shapes (Bm, F#m) {"\n"} Dominant 7 (C7, G7) {"\n"} Major 7
          (Fmaj7, Gmaj7){"\n"} These teach tension, color, and smoother
          transitions.
        </Text>
        <Text style={styles.subtitle}>4. Change Between Chords</Text>
        <Text style={styles.description}>
          Bm → C7{"\n"} Am7 → Dm7{"\n"} G → Gmaj7{"\n"} Use a metronome at 55–65
          BPM.{"\n"}
        </Text>
        <Text style={styles.subtitle}>5. Learn Basic Progressions</Text>
        <Text style={styles.description}>
          Great Grade 2 progressions: {"\n"} ii → V → I: Dm → G7 → C{"\n"} vi →
          IV → I → V: Am → F → C → G {"\n"} I → vi → IV → V: C → Am → Fmaj7 → G7{" "}
          {"\n"}.
        </Text>
        <Text style={styles.subtitle}>6. Add Simple Rhythm Patterns</Text>
        <Text style={styles.description}>
          Use these patterns: {"\n"} Down Down Up Up Down {"\n"} Down Miss Down
          Up Miss Up{"\n"} Keep the rhythm steady even when the chord changes
          feel slow.
        </Text>
        <Text style={styles.subtitle}>7. Ear Training</Text>
        <Text style={styles.description}>
          Play two chords back to back and listen:{"\n"} Major = bright {"\n"}
          Minor = dark{"\n"} 7th chords = colorful and slightly tense{"\n"}
          Start predicting the sound before playing it.
        </Text>
        <Text style={styles.subtitle1}>8. 10-Minute Daily Routine</Text>
        <Text style={styles.description1}>
          Warm-up → light finger stretching{"\n"} Shapes → play 3 chords slowly
          {"\n"}
          Changes → 2 minutes switching between any two{"\n"} Progression → loop
          one pattern{"\n"} Play-along → slow track with 4–8 chords
        </Text>
        <Text style={styles.subtitle1}>Tip</Text>
        <Text style={styles.description1}>
          Relax your fingertips and keep your thumb behind the neck. If a chord
          buzzes, reduce pressure slightly and adjust finger angle.
        </Text>

        <Text style={styles.subtitle1}>Song List</Text>
        <Text style={styles.description1}>
          Stand By Me – Ben E. King (G – Em – C – D – G7)
        </Text>
        <Text style={styles.description1}>
          No Woman No Cry – Bob Marley (C – G – Am – F)
        </Text>
        <Text style={styles.description1}>
          Wish You Were Here – Pink Floyd (G – C – D – Am7)s
        </Text>
        <Text style={styles.description1}>
          Let It Be – The Beatles (C – G – Am – F – C – G – Fmaj7)
        </Text>
        <Text style={styles.description1}>
          Redemption Song – Bob Marley (G – Em – C – D)
        </Text>
        <Text style={styles.description1}>
          Time of Your Life – Green Day (G – C – D – Em)
        </Text>
        <Text style={styles.description1}>
          Blue Suede Shoes – Elvis Presley (A7 – D7 – E7)
        </Text>
        <Text style={styles.description1}>
          House of the Rising Sun – Traditional (Am – C – D – F – E7)
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

export default grade2Chords;
