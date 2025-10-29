import * as GameState from "./GameState.js"
import * as Sign from "./Sign.js"

export { Tile } from "./Tile.js"
export type { TileFields, TileJSON } from "./Tile.js"
export { GameState }

export type GameStateKind = GameState.Active | GameState.Tie | GameState.Won
export type GameStateJSON =
  | GameState.ActiveJSON
  | GameState.TieJSON
  | GameState.WonJSON

export { Sign }

export type SignKind = Sign.X | Sign.O
export type SignJSON = Sign.XJSON | Sign.OJSON
