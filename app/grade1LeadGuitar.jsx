import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const grade1LeadGuitar = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Grade 1 Lead Guitar</Text>
        <Text style={styles.description}>
          In this section you will find URL's with chord progressions that are
          suitable for Grade 1 Lead Guitar
        </Text>
        <View style={styles.linksContainer}>
          <Link
            href="https://www.youtube.com/watch?v=oB3T1409YCM"
            style={styles.link}
          >
            <Text style={styles.linkText}>Grade 1, Lead guitar, A major</Text>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=w9bhc4yO_mo&ab_channel=SakisStaikos"
            style={styles.link}
          >
            <Text style={styles.linkText}>Grade 1, Lead guitar, A minor</Text>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=9zfKh_Pm8T4&ab_channel=SakisStaikos"
            style={styles.link}
          >
            <Text style={styles.linkText}>Grade 1, Lead guitar, E dom 7th</Text>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=23TNMzsB1DU&ab_channel=SakisStaikos"
            style={styles.link}
          >
            <Text style={styles.linkText}>Grade 1, Lead guitar, E minor</Text>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=B3tR1EtXpdE&ab_channel=SakisStaikos"
            style={styles.link}
          >
            <Text style={styles.linkText}>Grade 1, Lead guitar, G major</Text>
          </Link>
        </View>

        <View style={styles.studySection}>
          <Text style={styles.sectionTitle}>
            Lead Guitar Improvisation – Study Ideas & Practice Methods
          </Text>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>
              🎯 1. Scale Mastery (Daily Practice)
            </Text>
            <Text style={styles.studyText}>
              Practice your different type of scales
            </Text>
            <Text style={styles.studyText}>
              Use rhythmic variations: quarter notes, eighth notes, triplets,
              sixteenths, etc.
            </Text>
            <Text style={styles.studyText}>
              Play with and without a metronome.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>
              🎼 2. Backing Track Practice with Intent
            </Text>
            <Text style={styles.studyText}>
              Choose a key (e.g., Em) and jam over simple chord progressions.
            </Text>
            <Text style={styles.studyText}>
              Use focused limitations: "Improvise using only 3 notes", Use only
              slide or vibrato
            </Text>
            <Text style={styles.studyText}>
              Record yourself and review your playing critically.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎸 3. Lick Vocabulary</Text>
            <Text style={styles.studyText}>
              Learn short phrases (licks) from guitarists you admire: e.g., B.B.
              King, Hendrix, Gilmour, Slash, Frusciante.
            </Text>
            <Text style={styles.studyText}>
              Modify the lick: change rhythm, phrasing, or key to make it your
              own.
            </Text>
            <Text style={styles.studyText}>
              Practice call & response: play a phrase, then try to answer it
              musically.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🌀 4. Rhythmic Improvisation</Text>
            <Text style={styles.studyText}>
              Focus only on rhythm, using just 1 or 2 notes.
            </Text>
            <Text style={styles.studyText}>
              Try to "say something" rhythmically before worrying about note
              choice.
            </Text>
            <Text style={styles.studyText}>
              Play with metronome only, no chords or backing track.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>🎥 5. Record & Review</Text>
            <Text style={styles.studyText}>
              Frequently record your improvisations (video or audio).
            </Text>
            <Text style={styles.studyText}>
              Watch back to observe technique, tone, phrasing, and expression.
            </Text>
            <Text style={styles.studyText}>
              Keep a progress log: what you practiced, what worked, what to
              improve.
            </Text>
          </View>

          <View style={styles.studyItem}>
            <Text style={styles.studyHeader}>
              📘 6. Create a Personal "Lick Book"
            </Text>
            <Text style={styles.studyText}>
              Maintain a notebook or digital file of: Favorite licks, Tab ideas,
              chord progressions, theory tips.
            </Text>
            <Text style={styles.studyText}>
              This becomes your personal improvisation vocabulary.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default grade1LeadGuitar;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#212529",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DEE3E4",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#DEE3E4",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
    opacity: 0.9,
  },
  linksContainer: {
    width: "100%",
    alignItems: "stretch",
    marginBottom: 40,
  },
  link: {
    backgroundColor: "#20c997",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linkText: {
    color: "#212529",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  studySection: {
    width: "100%",
    backgroundColor: "rgba(222, 227, 228, 0.05)",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.2)",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 20,
    textAlign: "center",
  },
  studyItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(222, 227, 228, 0.1)",
  },
  studyHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20c997",
    marginBottom: 8,
  },
  studyText: {
    fontSize: 14,
    color: "#DEE3E4",
    lineHeight: 20,
    marginBottom: 4,
    opacity: 0.9,
  },
});
