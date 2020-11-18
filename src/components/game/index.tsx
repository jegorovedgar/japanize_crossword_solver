import React from "react";

export type GameDefinitionSequence = Array<Array<number>>;
export type GameDefinition = { width: GameDefinitionSequence, height: GameDefinitionSequence };
export enum GameCellState {
    Filled,
    Empty,
    Nullable
}
export type GameMatrix = Array<Array<GameCellState>>;
export interface GameProps {
    definition: GameDefinition,
    matrix: GameMatrix
}
const Game = ({ definition }: GameProps) => {
    return <pre>{JSON.stringify(definition, null, 2)}</pre>;
}

export default Game;