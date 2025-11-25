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
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.playerWrapper}>
          <YoutubePlayer
            ref={playerRef}
            height={fullscreen ? 400 : 220}
            width="100%"
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "rgba(33, 37, 41, 0.4)",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(32, 201, 151, 0.15)",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
    color: "#20C997",
  },
  playerWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#000",
  },
});
