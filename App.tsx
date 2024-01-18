import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameList } from "./components/GameList";
import {
  createBoardGame,
  deleteBoardGame,
  updateBoardGame,
  gamesQuery,
} from "./utils/utils";

const App = () => {
  const handleCreateBoardGame = () => {
    createBoardGame("Your title", 5);
    console.log("added");
  };

  const handleUpdateBoardGame = () => {
    updateBoardGame("Update title in array [0]", 9);
  };

  const handleDeleteBoardGame = () => {
    deleteBoardGame();
    console.log("delete");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <TouchableOpacity onPress={handleCreateBoardGame} style={styles.btn}>
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUpdateBoardGame} style={styles.btn}>
        <Text style={styles.text}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteBoardGame} style={styles.btn}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>

      <GameList games={gamesQuery} />
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
