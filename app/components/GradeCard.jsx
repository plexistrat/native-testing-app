import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function GradeContent({ title, grade }) {
  return (
    <View style={styles.container}>
      <Link href={`/${grade}`} asChild>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  button: {
    backgroundColor: "#212529",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#20c997",
    overflow: "hidden",
    shadowColor: "#20c997",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    minWidth: 150,
    minHeight: 40,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
  },
});
