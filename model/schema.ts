import { appSchema, tableSchema } from "@nozbe/watermelondb";

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
