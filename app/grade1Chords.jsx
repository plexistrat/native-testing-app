import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const grade1Chords = () => {
  const [selectedChord, setSelectedChord] = useState("A");

  const chords = {
    // Major Chords
    A: {
      type: "Major",
      notes: ["A", "C#", "E"],
      color: "#4CAF50",
      frets: [0, 2, 2, 2, 0, 0],
      fingers: [null, 3, 2, 1, null, null],
      muted: [false, false, false, false, false, true],
    },
    D: {
      type: "Major",
      notes: ["D", "F#", "A"],
      color: "#4CAF50",
      frets: [2, 3, 2, 0, -1, -1],
      fingers: [2, 3, 1, null, null, null],
      muted: [false, false, false, false, true, true],
    },
    E: {
      type: "Major",
      notes: ["E", "G#", "B"],
      color: "#4CAF50",
      frets: [0, 0, 1, 2, 2, 0],
      fingers: [null, null, 1, 3, 2, null],
      muted: [false, false, false, false, false, false],
    },
    C: {
      type: "Major",
      notes: ["C", "E", "G"],
      color: "#4CAF50",
      frets: [0, 1, 0, 2, 3, -1],
      fingers: [null, 1, null, 2, 3, null],
      muted: [false, false, false, false, false, true],
    },
    G: {
      type: "Major",
      notes: ["G", "B", "D"],
      color: "#4CAF50",
      frets: [3, 0, 0, 0, 2, 3],
      fingers: [3, null, null, null, 1, 2],
      muted: [false, false, false, false, false, false],
    },

    // Minor Chords
    Am: {
      type: "Minor",
      notes: ["A", "C", "E"],
      color: "#2196F3",
      frets: [0, 1, 2, 2, 0, -1],
      fingers: [null, 1, 3, 2, null, null],
      muted: [false, false, false, false, false, true],
    },
    Dm: {
      type: "Minor",
      notes: ["D", "F", "A"],
      color: "#2196F3",
      frets: [1, 3, 2, 0, -1, -1],
      fingers: [1, 3, 2, null, null, null],
      muted: [false, false, false, false, true, true],
    },
    Em: {
      type: "Minor",
      notes: ["E", "G", "B"],
      color: "#2196F3",
      frets: [0, 0, 0, 2, 2, 0],
      fingers: [null, null, null, 3, 2, null],
      muted: [false, false, false, false, false, false],
    },

    // Dominant 7th Chords
    A7: {
      type: "Dominant 7th",
      notes: ["A", "C#", "E", "G"],
      color: "#FF9800",
      frets: [0, 2, 0, 2, 0, -1],
      fingers: [null, 2, null, 1, null, null],
      muted: [false, false, false, false, false, true],
    },
    D7: {
      type: "Dominant 7th",
      notes: ["D", "F#", "A", "C"],
      color: "#FF9800",
      frets: [2, 1, 2, 0, -1, -1],
      fingers: [3, 2, 1, null, null, null],
      muted: [false, false, false, false, true, true],
    },
    E7: {
      type: "Dominant 7th",
      notes: ["E", "G#", "B", "D"],
      color: "#FF9800",
      frets: [0, 0, 1, 0, 2, 0],
      fingers: [null, null, 1, null, 2, null],
      muted: [false, false, false, false, false, false],
    },
    B7: {
      type: "Dominant 7th",
      notes: ["B", "D#", "F#", "A"],
      color: "#FF9800",
      frets: [2, 0, 2, 1, 2, -1],
      fingers: [4, null, 3, 1, 2, null],
      muted: [false, false, false, false, false, true],
    },

    // Major 7th Chords
    Amaj7: {
      type: "Major 7th",
      notes: ["A", "C#", "E", "G#"],
      color: "#9C27B0",
      frets: [0, 2, 1, 2, 0, -1],
      fingers: [null, 3, 1, 2, 0, null],
      muted: [false, false, false, false, false, true],
    },
    Dmaj7: {
      type: "Major 7th",
      notes: ["D", "F#", "A", "C#"],
      color: "#9C27B0",
      frets: [2, 2, 2, 0, -1, -1],
      fingers: [1, 1, 1, null, null, null],
      muted: [false, false, false, false, true, true],
    },
    Cmaj7: {
      type: "Major 7th",
      notes: ["C", "E", "G", "B"],
      color: "#9C27B0",
      frets: [0, 0, 0, 2, 3, 0],
      fingers: [null, null, null, 2, 3, null],
      muted: [false, false, false, false, false, true],
    },
  };

  const stringNames = ["E", "B", "G", "D", "A", "E"];
  const chordTypes = ["Major", "Minor", "Dominant 7th", "Major 7th"];

  const renderChordDiagram = () => {
    const chord = chords[selectedChord];

    return (
      <View style={styles.chordDiagram}>
        <Text style={[styles.chordName, { color: chord.color }]}>
          {selectedChord}
        </Text>

        <View style={styles.fretboard}>
          {/* Nut (top of fretboard) */}
          <View style={styles.nut} />

          <View style={styles.stringsContainer}>
            {[0, 1, 2, 3, 4, 5].map((stringIndex) => (
              <View key={stringIndex} style={styles.stringColumn}>
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

                <View style={styles.fretColumn}>
                  {[1, 2, 3, 4].map((fretNum) => (
                    <View key={fretNum} style={styles.fretCell}>
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
                      {fretNum < 4 && <View style={styles.fretWire} />}
                    </View>
                  ))}
                </View>

                <View style={styles.stringWire} />
              </View>
            ))}
          </View>

          {/* Fret markers */}
          <View style={styles.fretMarkers}>
            {[3].map((fret) => (
              <View
                key={fret}
                style={[styles.fretMarker, { top: (fret - 0.5) * 60 + 70 }]}
              />
            ))}
          </View>

          <View style={styles.fretNumbers}>
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
      <View>
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
                            selectedChord === chordName
                              ? chord.color
                              : "rgba(44, 62, 80, 0.8)",
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
      </View>
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
    <LinearGradient
      colors={["#0f1214", "#1b1e21", "#242830"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <View style={styles.orb1} />
            <View style={styles.orb2} />

            <View style={styles.content}>
              <Text style={styles.title}>🎸 Guitar Chords</Text>
              <Text style={styles.subtitle}>Open Chords – 1st Position</Text>

              {renderChordButtons()}
              {renderChordDiagram()}
              {renderChordInfo()}

              <View style={styles.practiceContainer}>
                <Text style={styles.practiceTitle}>Chords Practice</Text>

                <Text style={styles.sectionTitle}>
                  1. Learn the shapes gradually
                </Text>
                <Text style={styles.description}>
                  Start with Major chords (A, D, E), then add Minor (Am, Dm,
                  Em), and finally Dominant7 & Major7.
                </Text>
                <Text style={styles.tip}>
                  Don't try to learn all at once — one chord group per week is
                  ideal. Tip: place your fingers from top to bottom (in relation
                  to the fretboard).
                </Text>

                <Text style={styles.sectionTitle}>
                  2. Practice Slow Changes
                </Text>
                <Text style={styles.description}>
                  Pick 2 chords (e.g., A → D). Play slowly with a metronome at
                  50–60 BPM. Goal: clean sound and correct finger placement.
                </Text>

                <Text style={styles.sectionTitle}>3. Chord Transitions</Text>
                <Text style={styles.description}>
                  Once you know the shapes, practice transitions (e.g., A → D →
                  E). Use a strumming pattern (like down-down-up-up-down). Try
                  switching chords every bar, half, or quarter note.
                </Text>

                <Text style={styles.sectionTitle}>4. Learn Progressions</Text>
                <Text style={styles.description}>
                  Use simple progressions like: I-IV-V → A - D - E and ii-V-I →
                  Dm - G - C. This helps you understand musical relationships.
                </Text>

                <Text style={styles.sectionTitle}>
                  5. Play Along With Songs
                </Text>
                <Text style={styles.description}>
                  Choose simple songs that use these Grade 1 chords, e.g.
                  Knockin' On Heaven's Door (G - D - Am - G - D - C). This
                  connects chords to real music.
                </Text>

                <Text style={styles.sectionTitle}>6. Ear Training</Text>
                <Text style={styles.description}>
                  Play a chord and listen: Major sounds bright, Minor sounds
                  sad. Training your ear helps recognize chord "colors".
                </Text>

                <Text style={styles.sectionTitle}>
                  7. 10-Minute Daily Routine
                </Text>
                <Text style={styles.description}>
                  Warm-up → Play all chords slowly once. Changes → 2 minutes
                  switching (e.g., A↔D). Progression → Play a small rhythm (4
                  chords). Then jam over a backing track.
                </Text>

                <Text style={styles.tipTitle}>Tip:</Text>
                <Text style={styles.tipText}>
                  Don't always look at your hand — try to *feel* the shapes.
                  Your muscle memory will improve and transitions will get
                  faster.
                </Text>

                <Text style={styles.songListTitle}>Song List</Text>
                <Text style={styles.songItem}>
                  Knockin' On Heaven's Door – Bob Dylan (G – D – Am – G – D – C)
                </Text>
                <Text style={styles.songItem}>
                  Leaving On A Jet Plane – John Denver (G – C – D)
                </Text>
                <Text style={styles.songItem}>
                  Sweet Home Alabama – Lynyrd Skynyrd (D – C – G)
                </Text>
                <Text style={styles.songItem}>
                  Horse With No Name – America (Em – D6add9, replace with D)
                </Text>
                <Text style={styles.songItem}>
                  Twist And Shout – The Beatles (D – G – A7)
                </Text>
                <Text style={styles.songItem}>
                  Folsom Prison Blues – Johnny Cash (E – A – B7)
                </Text>
                <Text style={styles.songItem}>
                  Blue Suede Shoes – Elvis Presley (A7 – D7 – E7)
                </Text>
                <Text style={styles.songItem}>
                  Wonderful Tonight – Eric Clapton (G – D – C – D – Cmaj7)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    minHeight: 1000,
  },
  content: {
    padding: 20,
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
  practiceContainer: {
    marginTop: 30,
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
    fontWeight: "600",
    color: "#20c997",
    textAlign: "center",
    marginBottom: 30,
  },
  practiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#20c997",
    marginTop: 15,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#DEE3E4",
    marginBottom: 15,
    lineHeight: 22,
  },
  tip: {
    fontSize: 14,
    color: "#20c997",
    fontStyle: "italic",
    marginBottom: 15,
    lineHeight: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#20c997",
    marginTop: 15,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 15,
    color: "#DEE3E4",
    marginBottom: 15,
    lineHeight: 22,
  },
  songListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginTop: 20,
    marginBottom: 12,
  },
  songItem: {
    fontSize: 14,
    color: "#DEE3E4",
    marginBottom: 8,
    paddingLeft: 10,
  },
  chordCategory: {
    backgroundColor: "rgba(42, 42, 42, 0.8)",
    marginVertical: 10,
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
    marginVertical: 10,
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
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
  },
  chordName: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  fretboard: {
    backgroundColor: "#D2B48C",
    borderRadius: 12,
    padding: 20,
    height: 350,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
    position: "relative",
  },
  nut: {
    position: "absolute",
    top: 20,
    bottom: 20,
    left: 70,
    width: 6,
    backgroundColor: "#2C1810",
    borderRadius: 2,
    zIndex: 10,
  },
  stringsContainer: {
    flexDirection: "column",
    paddingTop: 10,
  },
  stringColumn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    position: "relative",
    height: 45,
  },
  stringLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2C1810",
    backgroundColor: "#F5DEB3",
    width: 24,
    height: 24,
    textAlign: "center",
    lineHeight: 24,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#8B4513",
  },
  mutedIndicator: {
    position: "absolute",
    left: 32,
    fontSize: 18,
    color: "#FF4444",
    fontWeight: "bold",
  },
  openIndicator: {
    position: "absolute",
    left: 32,
    fontSize: 18,
    color: "#44FF44",
    fontWeight: "bold",
  },
  fretColumn: {
    flexDirection: "row",
    marginLeft: 18,
  },
  fretCell: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  fretWire: {
    position: "absolute",
    right: 0,
    top: -25,
    bottom: -25,
    width: 2,
    backgroundColor: "#8B4513",
  },
  stringWire: {
    position: "absolute",
    left: 56,
    right: 0,
    top: "50%",
    height: 2,
    backgroundColor: "#C0C0C0",
    transform: [{ translateY: -1 }],
  },
  fingerPosition: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 5,
  },
  fingerNumber: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  fretMarkers: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -4 }],
  },
  fretMarker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B7355",
    position: "absolute",
    left: 160,
  },
  fretNumbers: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: 85,
  },
  fretNumberContainer: {
    width: 50,
    alignItems: "center",
  },
  fretNumber: {
    color: "#2C1810",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default grade1Chords;
