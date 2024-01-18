import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database } from "@nozbe/watermelondb";

import { chatSchema } from "../model/schema";
import { Chat } from "../model/message";
import { json } from "@nozbe/watermelondb/decorators";

const adapter = new SQLiteAdapter({
  schema: chatSchema,
  jsi: true /* enable if Platform.OS === 'ios' */,
});

const database = new Database({
  adapter,
  modelClasses: [Chat],
});

export const messagesQuery = database.get("chats").query();

export const createMessage = async (chatProp: any) => {
  // console.log("chat >>>", chatProp);

  database.write(() =>
    database.get<Chat>("chats").create((chat) => {
      // chat.user_name = chatProp.user_name;
      // chat.msg_id = chatProp.msg_id;
      // chat.created_at = chatProp.created_at;
      // chat.text = chatProp.text;
      // chat.user_avatar = chatProp.user_avatar;
      // chat.user_id = chatProp.user_id;

      // chat = { ...chat, ...JSON.parse(JSON.stringify(chatProp)) };
      let keys = Object.keys(chatProp);
      keys.map((item) => {
        chat[item] = chatProp[item];
      });

      // console.log("chat >>>", chat);
    })
  );
};

export const deleteMessage = async () => {
  const numberOfStarredMessages = await database.get("chats").query().fetch();

  if (numberOfStarredMessages.length) {
    await database.write(async () => {
      await numberOfStarredMessages[0].destroyPermanently();
    });
  }
};
