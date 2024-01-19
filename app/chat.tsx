import React from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import {
  createMessage,
  deleteMessage,
  messagesQuery,
} from "../utils/messageCrud";
import HeaderComponents from "../components/HeaderComponents";
import { GiftedChatList } from "../components/GiftedChatList";

const Chat = () => {
  const router = useRouter();

  const backAction = () => {
    router.back();
  };

  const moreAction = () => {
    Alert.alert("Sorry", "This feature isn't available");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponents backAction={backAction} moreAction={moreAction} />

      {/* <View>
        <GameList chats={messagesQuery} deleteAction={deleteMessage} />
      </View> */}

      <GiftedChatList chats={messagesQuery} />
    </SafeAreaView>
  );
};

export default Chat;
