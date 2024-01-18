import { Model } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export class Chat extends Model {
  static table = "chats";

  // @ts-ignore
  @text("msg_id") msg_id: string;
  // @ts-ignore
  @readonly @date("created_at") createdAt: Date;
  // @ts-ignore
  @text("text") text: string;
  // @ts-ignore
  @text("user_id") user_id: string;
  // @ts-ignore
  @text("user_name") user_name: string;
  // @ts-ignore
  @text("user_avatar") user_avatar: string;
}

// import { Model } from "@nozbe/watermelondb";
// import { children, field, text } from "@nozbe/watermelondb/decorators";

// export default class Chat extends Model {
//   static table = "chats";

//   static associations = {
//     user_info: { type: "has_many", foreignKey: "chat_id" },
//   };

//   // @ts-ignore
//   @text("msg_id") msg_id: string;
//   // @ts-ignore
//   @field("created_at") created_at: Date;
//   // @ts-ignore
//   @text("text") text: string;
//   // @ts-ignore
//   @children("user_infos") user_infos;
// }
