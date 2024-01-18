import withObservables from "@nozbe/with-observables";
import GameListComponent from "./GameListComponent";

const enhance = withObservables(["chats"], ({ chats }) => ({
  chats: chats.observe(),
}));

export const GameList = enhance(GameListComponent);
