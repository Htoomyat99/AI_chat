import { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

//utisl
import { ModelToGiftedMsg, giftedChatMsgToModel } from "../utils/transform";
import { createMessage, deleteMessage } from "../utils/messageCrud";
import { fetchPost } from "../utils/fetchData";

import { Chat } from "../model/message";

interface ResDataTye {
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
  const [loading, setLoading] = useState(false);

  const userData = {
    id: Math.random().toFixed(5).toString(),
    name: "AI",
    avatar:
      "https://www.businesstoday.com.my/wp-content/uploads/2023/12/What-is-Artiificial-IntelligenceAI.webp",
  };

  useEffect(() => {
    const textMessage = [];
    chats.map((chat) => {
      textMessage.push(ModelToGiftedMsg(chat));
    });
    setMessages(textMessage);
  }, [chats]);

  const fetchPostData = async (msg: String) => {
    const data = {
      chat_owner: "htoo",
      msg_owner: "openAI",
      msg: msg,
      created_at: new Date(),
      client_src: "mobile",
    };
    setLoading(true);
    const response = await fetchPost({ data: data });
    // console.log("res >>>", response);
    setLoading(false);
    return response;
  };

  const onSend = useCallback(async (text = []) => {
    //user message
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, text)
    );

    //store usermessage in db
    const chatProps = giftedChatMsgToModel(text[0]);
    createMessage(chatProps);

    let resData: ResDataTye = {
      _id: Math.random().toFixed(5),
      text: "Sever Error",
      createdAt: new Date(),
      user: {
        _id: userData.id,
        name: userData.name,
        avatar: userData.avatar,
      },
    };

    // let test: any = {};
    // test.id = 1;
    // test.data = JSON.stringify(encodeURI(text[0].text));
    // console.log("test >>>", decodeURI(test.data));
    // console.log("test 2 >>>", JSON.parse(test));
    // resData.text = await fetchPostData(encodeURI(text[0].text));

    //fetchFromApi //AI message
    resData.text = await fetchPostData(text[0].text);
    setMessages((prev) => GiftedChat.append(prev, [resData]));

    //stored ai message in DB
    const AIProps = giftedChatMsgToModel(resData);
    createMessage(AIProps);
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
      {loading && (
        <ActivityIndicator
          size={"large"}
          color={"black"}
          style={{ position: "absolute", top: 100, left: 180 }}
        />
      )}
    </View>
  );
}
