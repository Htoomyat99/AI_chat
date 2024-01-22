import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import {
//   createBoardGame,
//   deleteBoardGame,
//   updateBoardGame,
//   gamesQuery,
// } from "../utils/utils";
// import { GameList } from "../components/GameList";
import { useRouter } from "expo-router";
import { useState } from "react";
import withObservables from "@nozbe/with-observables";

const App = () => {
  const router = useRouter();

  const handleCreateBoardGame = () => {
    // createBoardGame("Your title", 5);
    router.push("/pushNoti");
  };

  const handleUpdateBoardGame = async () => {
    // await updateBoardGame("Update title in array [0]", 9);
    // setCount(count + 1);
  };

  const handleDeleteBoardGame = () => {
    // deleteBoardGame();
    router.push("/chat");
  };

  const goNext = () => {
    // router.push("/chat");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleCreateBoardGame} style={styles.btn}>
          <Text style={styles.text}>Push Noti</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDeleteBoardGame}
          style={[styles.btn, { backgroundColor: "blue" }]}
        >
          <Text style={styles.text}>Chat</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={goNext} style={styles.btn}>
        <Text style={styles.text}>go Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
  },
  btn: {
    marginVertical: 20,
    backgroundColor: "teal",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});

export default App;
