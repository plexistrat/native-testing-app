import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "rgba(32, 201, 151, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.3)",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
  },

  backButtonText: {
    fontSize: 16,
    color: "#20c997",
    fontWeight: "600",
  },
});
