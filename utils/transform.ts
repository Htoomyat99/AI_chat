interface MsgProps {
  _id: string;
  text: string;
  createdAt: Date;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export const giftedChatMsgToModel = (msg: MsgProps) => {
  let row: any = {};
  row.msg_id = msg._id;
  row.text = msg.text;
  // row.created_at = msg.createdAt;
  row.user_id = msg.user._id;
  row.user_name = msg.user.name;
  row.user_avatar = msg.user.avatar;
  return row;
};

export const ModelToGiftedMsg = (model: any) => {
  // console.log("timeType >>", typeof model.createdAt);
  let createdDate = new Date(model.createdAt.toString());
  // console.log("dateType >>>", typeof createdDate);
  // console.log("date >>", createdDate);
  let msg: any = {};
  msg.user = {};
  msg._id = model.msg_id;
  msg.text = model.text;
  msg.createdAt = model.createdAt;
  msg.user._id = model.user_id;
  msg.user.name = model.user_name;
  msg.user.avatar = model.user_avatar;

  return msg;
};
