import { useState, useEffect, useCallback } from "react";
import { View, Alert, Text } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { Chat } from "../model/message";
import { ModelToGiftedMsg, giftedChatMsgToModel } from "../utils/transform";
import { createMessage, deleteMessage } from "../utils/messageCrud";

interface FakeData {
  _id: string;
  text: string;
  createdAt: Date;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export default function GiftedChatComponent({ chats }: { chats: Chat[] }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const textMessage = [];
    chats.map((chat) => {
      textMessage.push(ModelToGiftedMsg(chat));
    });
    setMessages(textMessage);
  }, [chats]);

  const userData = {
    id: Math.random().toFixed(5).toString(),
    name: "AI",
    avatar:
      "https://www.businesstoday.com.my/wp-content/uploads/2023/12/What-is-Artiificial-IntelligenceAI.webp",
  };

  const onSend = useCallback((text = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, text)
    );

    // console.log("textGifted >>>", text);

    //fetchFromApi
    let fakeData: FakeData = {
      _id: Math.random().toFixed(5),
      text: "What do you want to know",
      createdAt: new Date(),
      user: {
        _id: userData.id,
        name: userData.name,
        avatar: userData.avatar,
      },
    };

    setMessages((prev) => GiftedChat.append(prev, [fakeData]));
    //stored in DB

    // giftedChatMsgToModel(text[0]);

    const chatProps = giftedChatMsgToModel(text[0]);
    const AIProps = giftedChatMsgToModel(fakeData);
    // console.log("chatProPsInChat >>", chatProps);

    createMessage(chatProps);
    createMessage(AIProps);
    // deleteMessage();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        inverted={false}
        messages={messages}
        onSend={(text) => onSend(text)}
        user={{
          _id: "1",
          name: "user",
          avatar:
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        }}
        placeholder="Ask me anything"
        alwaysShowSend={true} //showing send button default is false
        // loadEarlier={true}
        // onLoadEarlier={() => console.log("hi")}
        showAvatarForEveryMessage={true}
        showUserAvatar={true}
        // renderAvatar={(props) => {
        //   return <Foundation name="indent-more" size={26} color="#555" />;
        // }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: { backgroundColor: "blue", paddingVertical: 5 },
                left: { backgroundColor: "teal", paddingVertical: 5 },
              }}
              textStyle={{
                right: { color: "white", fontSize: 11 },
                left: { color: "white", fontSize: 11 },
              }}
              // timeTextStyle={{
              //   right: { color: "white" },
              //   left: { color: "white" },
              // }}
            />
          );
        }}
        onLongPress={() => {
          deleteMessage();
        }}
        minComposerHeight={30}
        scrollToBottomStyle={{ backgroundColor: "red" }}
        // renderActions={() => (
        //   <View style={{ paddingVertical: 0 }}>
        //     <Actions
        //       onPressActionButton={() => console.log("action")}
        //       icon={() => (
        //         <Ionicons name="chevron-back" size={23} color="#555" />
        //       )}
        //     />
        //   </View>
        // )}
      />
    </View>
  );
}
