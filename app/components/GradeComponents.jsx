import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { linkTo } from "expo-router/build/global-state/routing";

const GradeComponents = ({ title, num }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          linkTo(`/grade${num}${title}`);
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GradeComponents;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#212529",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4A90E2",
    overflow: "hidden",
    shadowColor: "#a0c1e7ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    minWidth: 150,
    minHeight: 50,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEE3E4",
  },
});
