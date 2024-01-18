// import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
// import { BoardGame } from "../model/board_game";
// import { schema } from "../model/schema";
// import { Database } from "@nozbe/watermelondb";

// const adapter = new SQLiteAdapter({
//   schema: schema,
//   jsi: true /* enable if Platform.OS === 'ios' */,
// });

// const database = new Database({
//   adapter,
//   modelClasses: [BoardGame],
// });

// export const gamesQuery = database.get("board_games").query();

// export const createBoardGame = (title: string, minPlayers: number) => {
//   database.write(() =>
//     database.get<BoardGame>("board_games").create((boardGame) => {
//       boardGame.title = title;
//       boardGame.minPlayers = minPlayers;
//     })
//   );
// };

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

// export const deleteBoardGame = async () => {
//   const numberOfStarredBoardGame = await database
//     .get("board_games")
//     .query()
//     .fetch();
//   if (numberOfStarredBoardGame.length) {
//     await database.write(async () => {
//       await numberOfStarredBoardGame[0].destroyPermanently();
//     });
//   }
// };
