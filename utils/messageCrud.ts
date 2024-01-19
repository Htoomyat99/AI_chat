import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database } from "@nozbe/watermelondb";
import { chatSchema } from "../model/schema";
import { Chat } from "../model/message";

const adapter = new SQLiteAdapter({
  schema: chatSchema,
  jsi: true,
});

const database = new Database({
  adapter,
  modelClasses: [Chat],
});

export const messagesQuery = database.get("chats").query();

export const createMessage = async (chatProp: any) => {
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

// export const updateBoardGame = async (title: string, minPlayer: number) => {
//   const numberOfStarredBoardGame = await database
//     .get("board_games")
//     .query()
//     .fetch();
//   if (numberOfStarredBoardGame.length) {
//     await database.write(async () => {
//       await numberOfStarredBoardGame[0].update((boardgame: BoardGame) => {
//         boardgame.title = title;
//         boardgame.minPlayers = minPlayer;
//       });
//     });
//   }
// };
