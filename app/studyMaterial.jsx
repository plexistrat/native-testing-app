import { StyleSheet, Text, View, ScrollView } from "react-native";
import GradeCard from "./components/GradeCard";
import FloatingNotesBackground from "./components/FloatingNotesBackground";
const studyMaterial = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <FloatingNotesBackground>
        <View style={styles.container}>
          <Text style={styles.title}>Study Material</Text>
          <View style={styles.gradeContainer}>
            <GradeCard title="Grade 1" grade="grade1" />
            <GradeCard title="Grade 2" grade="grade2" />
            <GradeCard title="Grade 3" grade="grade3" />
            <GradeCard title="Grade 4" grade="grade4" />
            <GradeCard title="Grade 5" grade="grade5" />
            <GradeCard title="Grade 6" grade="grade6" />
            <GradeCard title="Grade 7" grade="grade7" />
            <GradeCard title="Grade 8" grade="grade8" />
          </View>
        </View>
      </FloatingNotesBackground>
    </ScrollView>
  );
};

export default studyMaterial;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 1000,
    backgroundColor: "#212529",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#DEE3E4",
  },

  gradeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
});
