import withObservables from "@nozbe/with-observables";
import GiftedChatComponent from "./GiftedChatComponent";

const enhance = withObservables(["chats"], ({ chats }) => ({
  chats: chats.observe(),
}));

export const GiftedChatList = enhance(GiftedChatComponent);
