import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Chat } from "../model/message";
import { ModelToGiftedMsg } from "../utils/transform";

function GameListComponent({
  chats,
  deleteAction,
}: {
  chats: Chat[];
  deleteAction: () => void;
}) {
  useEffect(() => {
    // console.log(chats);
  }, [chats]);

  const messages = [];

  chats.map((chat) => {
    messages.push(ModelToGiftedMsg(chat));
  });

  // console.log("message in giftedcomponent >>>", messages);

  return (
    <View>
      {messages.map((chat: any) => (
        <View
          key={chat.msg_id}
          style={{
            backgroundColor: "lightblue",
            paddingVertical: 10,
            paddingHorizontal: 30,
            marginVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text>userName - {chat.user.name} </Text>
          <Text>user_id - {chat.user._id}</Text>
          <Text>created_At: {JSON.stringify(chat)}</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={deleteAction}
              style={{ backgroundColor: "white", padding: 5, borderRadius: 3 }}
            >
              <Text style={{ color: "black", fontSize: 13 }}>delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={deleteAction}
              style={{ backgroundColor: "red", padding: 5, borderRadius: 3 }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

export default GameListComponent;
