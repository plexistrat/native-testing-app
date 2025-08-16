import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YouTubePlayer({ videoId, title }) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  // Handle video state changes (playing, paused, ended, etc.)
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video finished", "The video has ended.");
    }
  }, []);

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>

      <YoutubePlayer
        ref={playerRef}
        height={fullscreen ? 400 : 250}
        width={350}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  controlsContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#20C997",
  },
});
