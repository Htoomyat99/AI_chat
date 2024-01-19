import { Model } from "@nozbe/watermelondb";
import { text, date, readonly } from "@nozbe/watermelondb/decorators";

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
