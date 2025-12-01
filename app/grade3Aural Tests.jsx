import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import YouTubePlayer from "./components/YouTubePlayer";
import BackButton from "./components/backButton";

const Grade3AuralTests = () => {
  const testSections = [
    {
      title: "Clap Back a Rhythm",
      icon: "👏",
      color: "#4CAF50",
      number: "1",
      description:
        "Examiner plays a 4 bar rhythm (4/4, 3/4, 6/8) . You listen, then clap it back in time. Focus on steady pulse and accurate rhythm",
    },
    {
      title: "Repetition of Melodic Phrases",
      icon: "🎧",
      color: "#2196F3",
      number: "2",
      subtitle: "Based on the scales from the Scale Section",
    },
    {
      title: "Keeping Time",
      icon: "🕐",
      color: "#FF9800",
      number: "3",
    },
    {
      title: "Pitch Test (Intervals)",
      icon: "🎧",
      color: "#9C27B0",
      number: "4",
      subtitle: "RGT Grade 3",
    },
    {
      title: "Harmony Test",
      icon: "🎵",
      color: "#F44336",
      number: "5",
    },
  ];

  const intervals = [
    {
      name: "Major 2nd",
      symbol: "M2",
      example: "C to D",
      song: "Happy Birthday (Ha-ppy)",
      color: "#4CAF50",
    },
    {
      name: "Major 3rd",
      symbol: "M3",
      example: "C to E",
      song: "When the Saints Go...",
      color: "#2196F3",
    },
    {
      name: "Perfect 4th",
      symbol: "P4",
      example: "C to F",
      song: "Here Comes the Bride",
      color: "#FF9800",
    },
    {
      name: "Perfect 5th",
      symbol: "P5",
      example: "C to G",
      song: "Star Wars",
      color: "#9C27B0",
    },
    {
      name: "Major 6th",
      symbol: "M6",
      example: "C to A",
      song: "The days of wine and roses",
      color: "#4CAF50",
    },
    {
      name: "Major 7th",
      symbol: "M7",
      example: "C to B",
      song: "Take on me",
      color: "#2196F3",
    },
    {
      name: "Octave",
      symbol: "M8",
      example: "C to C",
      song: "Somewhere over the rainbow",
      color: "#FF9800",
    },
  ];

  const chordQualities = [
    { type: "Major", description: "Full, strong, happy", color: "#4CAF50" },
    { type: "Minor", description: "Sad, soft", color: "#2196F3" },
  ];

  const melodicExamples = [
    { notes: "C – D – E – D", rhythm: "four quarter notes", number: "1" },
    {
      notes: "G – E – C",
      rhythm: "half note – quarter – quarter",
      number: "2",
    },
    {
      notes: "C – C – D – E",
      rhythm: "eighth – eighth – quarter – half",
      number: "3",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.mainTitle}>🎵 Grade 1 Aural Tests</Text>
        <Text style={styles.subtitle}>
          Complete guide to ear training assessments
        </Text>
      </View>

      {/* Test 1: Clap Back Rhythm */}
      <View
        style={[styles.testSection, { borderLeftColor: testSections[0].color }]}
      >
        <View style={styles.sectionHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <Text style={styles.sectionIcon}>{testSections[0].icon}</Text>
          <Text style={styles.sectionTitle}>{testSections[0].title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>
            {testSections[0].description}
          </Text>
        </View>
        <YouTubePlayer
          videoId="QPR7UQ08mvU"
          title="Clap Back Rhythm example 1-2-3"
        />
      </View>

      {/* Test 2: Melodic Phrases */}
      <View
        style={[styles.testSection, { borderLeftColor: testSections[1].color }]}
      >
        <View style={styles.sectionHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <Text style={styles.sectionIcon}>{testSections[1].icon}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>{testSections[1].title}</Text>
            <Text style={styles.sectionSubtitle}>
              {testSections[1].subtitle}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.goalSection}>
            <Text style={styles.goalTitle}>🎯 Goal of the Test</Text>
            <Text style={styles.goalText}>
              To accurately repeat a short melodic phrase played by the
              examiner, using your instrument. The phrase:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Is based on the Grade 2 scales (e.g. G Major, A natural Minor,
                B Minor Pentatonic)
              </Text>
              <Text style={styles.bulletItem}>
                • The phrase starts on the root note
              </Text>
              <Text style={styles.bulletItem}>
                • Uses simple rhythms – mainly quarter notes, eighth notes, and
                half notes
              </Text>
            </View>
          </View>

          <View style={styles.examplesSection}>
            <YouTubePlayer
              videoId="AEAX6uY28SI"
              title="Repetitionof Melodic Phrases example 1-2"
            />
            <YouTubePlayer
              videoId="hglE-c2kjkg"
              title="Repetitionof Melodic Phrases example 3-4"
            />
          </View>

          <View style={styles.practiceSection}>
            <Text style={styles.practiceTitle}>✅ How to Practice:</Text>
            <View style={styles.practiceList}>
              <Text style={styles.practiceItem}>
                • Listen and repeat short phrases played by a teacher or app
              </Text>
              <Text style={styles.practiceItem}>
                • Use only the notes from all the scales from scale section
              </Text>

              <Text style={styles.practiceItem}>
                • Practice with a friend or teacher: They play a short melody →
                you repeat it immediately
              </Text>
              <Text style={styles.practiceItem}>
                • Record yourself, then listen to check your accuracy
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Test 3: Keeping Time */}
      <View
        style={[styles.testSection, { borderLeftColor: testSections[2].color }]}
      >
        <View style={styles.sectionHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>3</Text>
          </View>
          <Text style={styles.sectionIcon}>{testSections[2].icon}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>{testSections[2].title}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.goalSection}>
            <Text style={styles.goalTitle}>🎯 Goal:</Text>
            <Text style={styles.goalText}>
              To clap the pulse (beat) accurately while a melody is played,
              showing that you understand the timing of the music.
            </Text>
          </View>

          <View style={styles.processSection}>
            <Text style={styles.processTitle}>🎼 What Happens:</Text>
            <Text style={styles.processText}>
              The examiner plays a 4-bar melody twice, in 4/4 or 3/4 time.
              During the second playing, the student claps the main pulse (on
              each beat). The first beat of each bar should be slightly
              accented.
            </Text>
          </View>

          <View style={styles.clappingSection}>
            <Text style={styles.clappingTitle}>✋ How to Clap:</Text>
            <View style={styles.clappingPattern}>
              <Text style={styles.patternText}>| 1 2 3 4 |</Text>
              <Text style={styles.patternDescription}>
                clap, clap, clap, clap (with a stronger clap on beat 1)
              </Text>
            </View>
          </View>

          <View style={styles.practiceSection}>
            <Text style={styles.practiceTitle}>✅ Tips for Practicing:</Text>
            <View style={styles.practiceList}>
              <Text style={styles.practiceItem}>
                • Use a metronome (start around 60–80 BPM)
              </Text>
              <Text style={styles.practiceItem}>
                • Practice clapping steady beats over simple melodies or even
                over pop songs
              </Text>
              <Text style={styles.practiceItem}>
                • Always feel the downbeat — it's your anchor!
              </Text>
            </View>
          </View>
        </View>
        <YouTubePlayer videoId="Rz25F58bKqE" title="Keeping Time example 1" />
        <YouTubePlayer videoId="EFhnhQpW4Bk" title="Keeping Time example 2" />
      </View>

      {/* Test 4: Pitch Test (Intervals) */}
      <View
        style={[styles.testSection, { borderLeftColor: testSections[3].color }]}
      >
        <View style={styles.sectionHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>4</Text>
          </View>
          <Text style={styles.sectionIcon}>{testSections[3].icon}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>{testSections[3].title}</Text>
            <Text style={styles.sectionSubtitle}>
              {testSections[3].subtitle}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.goalSection}>
            <Text style={styles.goalTitle}>🎯 Objective:</Text>
            <Text style={styles.goalText}>
              To identify and name intervals played by the examiner.
            </Text>
          </View>

          <View style={styles.intervalsSection}>
            <Text style={styles.intervalsTitle}>🎼 Intervals Tested:</Text>
            <Text style={styles.intervalsDescription}>
              The examiner plays two notes (either together or separately). The
              student must name the interval:
            </Text>

            <View style={styles.intervalsGrid}>
              {intervals.map((interval, index) => (
                <View
                  key={index}
                  style={[styles.intervalCard, { borderColor: interval.color }]}
                >
                  <View
                    style={[
                      styles.intervalBadge,
                      { backgroundColor: interval.color },
                    ]}
                  >
                    <Text style={styles.intervalSymbol}>{interval.symbol}</Text>
                  </View>
                  <Text style={styles.intervalName}>{interval.name}</Text>
                  <Text style={styles.intervalExample}>{interval.example}</Text>
                  <Text style={styles.intervalSong}>"{interval.song}"</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.practiceSection}>
            <Text style={styles.practiceTitle}>🎓 Practice Ideas:</Text>
            <View style={styles.practiceList}>
              <Text style={styles.practiceItem}>
                • Play and sing intervals on your own instrument
              </Text>
              <Text style={styles.practiceItem}>
                • Use a piano or app (like Tenuto, Functional Ear Trainer)
              </Text>
              <Text style={styles.practiceItem}>
                • Start by singing the interval from a root note
              </Text>
              <Text style={styles.practiceItem}>
                • Record yourself and quiz later
              </Text>
            </View>
          </View>
        </View>
        <YouTubePlayer videoId="6jf85Dzozfo" title="Pitch Test (Intervals)" />
      </View>

      {/* Test 5: Harmony Test */}
      <View
        style={[styles.testSection, { borderLeftColor: testSections[4].color }]}
      >
        <View style={styles.sectionHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>5</Text>
          </View>
          <Text style={styles.sectionIcon}>{testSections[4].icon}</Text>
          <Text style={styles.sectionTitle}>{testSections[4].title}</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>
            The examiner plays 2 chords, one major and one minor (or the
            opposite ). The candidate listens twice. The student must identify
            the chord type by ear:
          </Text>

          <View style={styles.chordsGrid}>
            {chordQualities.map((chord, index) => (
              <View
                key={index}
                style={[styles.chordCard, { borderColor: chord.color }]}
              >
                <View
                  style={[styles.chordBadge, { backgroundColor: chord.color }]}
                >
                  <Text style={styles.chordType}>{chord.type}</Text>
                </View>
                <Text style={styles.chordDescription}>{chord.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.practiceSection}>
            <Text style={styles.practiceTitle}>🎓 How to Practice:</Text>
            <Text style={styles.practiceSubtitle}>
              Practice progressions like:
            </Text>

            <View style={styles.practiceList}>
              <Text style={styles.practiceItem}>
                • Listen to Each Chord Quality characteristics
              </Text>
              <Text style={styles.practiceItem}>
                • Use Ear Training Apps: TonedEar, EarMaster, or Teoria
              </Text>
              <Text style={styles.practiceItem}>
                • Focus on chord recognition modes
              </Text>
            </View>
          </View>
        </View>
        <YouTubePlayer videoId="tjUgDqJrwMM" title="Harmony Test" />
      </View>
      <View style={styles.backButton}>
        <BackButton />
      </View>
    </ScrollView>
  );
};

export default Grade3AuralTests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Header Styles
  headerSection: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
    paddingVertical: 25,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#B0BEC5",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  // Test Section Styles
  testSection: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  numberBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#B0BEC5",
    fontStyle: "italic",
    marginTop: 2,
  },

  // Content Styles
  contentContainer: {
    padding: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#E0E0E0",
    lineHeight: 24,
    marginBottom: 15,
  },

  // Goal Section
  goalSection: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(76, 175, 80, 0.2)",
    marginBottom: 20,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 8,
  },
  goalText: {
    fontSize: 15,
    color: "#E8F5E8",
    lineHeight: 22,
    marginBottom: 10,
  },

  // Bullet Lists
  bulletList: {
    paddingLeft: 10,
  },
  bulletItem: {
    fontSize: 15,
    color: "#E8F5E8",
    lineHeight: 22,
    marginBottom: 5,
  },

  // Examples Section
  examplesSection: {
    marginBottom: 20,
  },
  examplesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 15,
  },
  exampleCard: {
    backgroundColor: "rgba(33, 150, 243, 0.1)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(33, 150, 243, 0.2)",
    marginBottom: 10,
  },
  exampleNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 5,
  },
  exampleNotes: {
    fontSize: 15,
    color: "#E3F2FD",
    marginBottom: 3,
  },
  exampleRhythm: {
    fontSize: 15,
    color: "#E3F2FD",
  },

  // Process Section
  processSection: {
    backgroundColor: "rgba(255, 152, 0, 0.1)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 152, 0, 0.2)",
    marginBottom: 20,
  },
  processTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9800",
    marginBottom: 8,
  },
  processText: {
    fontSize: 15,
    color: "#FFF3E0",
    lineHeight: 22,
  },

  // Clapping Section
  clappingSection: {
    backgroundColor: "rgba(156, 39, 176, 0.1)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(156, 39, 176, 0.2)",
    marginBottom: 20,
  },
  clappingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9C27B0",
    marginBottom: 10,
  },
  clappingPattern: {
    alignItems: "center",
  },
  patternText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F3E5F5",
    marginBottom: 5,
    fontFamily: "monospace",
  },
  patternDescription: {
    fontSize: 14,
    color: "#F3E5F5",
    textAlign: "center",
  },

  // Practice Section
  practiceSection: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  practiceSubtitle: {
    fontSize: 15,
    color: "#B0BEC5",
    marginBottom: 10,
  },
  practiceList: {
    paddingLeft: 5,
  },
  practiceItem: {
    fontSize: 15,
    color: "#E0E0E0",
    lineHeight: 22,
    marginBottom: 8,
  },

  // Intervals Section
  intervalsSection: {
    marginBottom: 20,
  },
  intervalsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9C27B0",
    marginBottom: 8,
  },
  intervalsDescription: {
    fontSize: 15,
    color: "#E0E0E0",
    lineHeight: 22,
    marginBottom: 15,
  },
  intervalsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  intervalCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 15,
    alignItems: "center",
  },
  intervalBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  intervalSymbol: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  intervalName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },
  intervalExample: {
    fontSize: 12,
    color: "#B0BEC5",
    textAlign: "center",
    marginBottom: 5,
  },
  intervalSong: {
    fontSize: 11,
    color: "#90A4AE",
    textAlign: "center",
    fontStyle: "italic",
  },

  // Chords Section
  chordsGrid: {
    marginBottom: 20,
  },
  chordCard: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  chordBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 15,
  },
  chordType: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  chordDescription: {
    flex: 1,
    fontSize: 14,
    color: "#E0E0E0",
  },

  // Progressions
  progressionsContainer: {
    marginBottom: 15,
  },
  progressionCard: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(244, 67, 54, 0.2)",
    marginBottom: 8,
    alignItems: "center",
  },
  progressionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFEBEE",
    fontFamily: "monospace",
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
  },
});
