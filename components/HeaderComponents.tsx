import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const HeaderComponents = ({
  backAction,
  moreAction,
}: {
  backAction: () => void;
  moreAction: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backAction} activeOpacity={0.8}>
        <Ionicons name="chevron-back" size={33} color="#555" />
      </TouchableOpacity>
      <Text style={styles.text}>AI Chat</Text>
      <TouchableOpacity
        style={styles.moreBtn}
        onPress={moreAction}
        activeOpacity={0.8}
      >
        <Foundation name="indent-more" size={26} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponents;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
  },
  moreBtn: {
    paddingRight: 10,
  },
});
