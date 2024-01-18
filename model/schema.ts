import { appSchema, tableSchema } from "@nozbe/watermelondb";

// export const schema = appSchema({
//   version: 2,
//   tables: [
//     tableSchema({
//       name: "board_games",
//       columns: [
//         { name: "title", type: "string" },
//         { name: "min_players", type: "number" },
//       ],
//     }),
//   ],
// });

export const chatSchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "chats",
      columns: [
        { name: "msg_id", type: "string" },
        { name: "text", type: "string" },
        { name: "created_at", type: "number" },
        { name: "user_id", type: "string" },
        { name: "user_name", type: "string" },
        { name: "user_avatar", type: "string" },
      ],
    }),
  ],
});

// export const chatSchema = appSchema({
//   version: 5,
//   tables: [
//     tableSchema({
//       name: "chats",
//       columns: [
//         { name: "msg_id", type: "string" },
//         { name: "text", type: "string" },
//         { name: "created_at", type: "number" },
//       ],
//     }),
//     tableSchema({
//       name: "user_infos",
//       columns: [
//         { name: "user_id", type: "string" },
//         { name: "user_name", type: "string" },
//         { name: "user_avatar", type: "string" },
//       ],
//     }),
//   ],
// });
