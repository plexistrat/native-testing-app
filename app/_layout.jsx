import { StyleSheet, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { linkTo } from "expo-router/build/global-state/routing";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529", // Same dark background color
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#DEE3E4", // Same light text color
    marginBottom: 20,
  },
});
