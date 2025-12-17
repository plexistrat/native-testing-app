import { StyleSheet, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f1214",
  },
  container: {
    flex: 1,
    backgroundColor: "#0f1214",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#DEE3E4", // Same light text color
    marginBottom: 20,
  },
});
