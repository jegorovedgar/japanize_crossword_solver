import React from "react";

export type GameDefinitionSequence = Array<Array<number>>;
export type GameDefinition = { x: GameDefinitionSequence, y: GameDefinitionSequence };
export enum GameCellState {
    Filled,
    Empty,
    Null
}
export type GameMatrix = Array<Array<GameCellState>>;
export interface GameProps {
    definition: GameDefinition,
    matrix: GameMatrix
}
const Game = ({ definition, matrix }: GameProps) => {
    return (
        <>
            Definition
            <pre>
                {JSON.stringify(definition, null, 2)}<br />
            </pre>
            Matrix
            <pre style={{
                lineHeight: 0.6,
                fontSize: '26px'
            }}>
                {matrix.reduce((acc, row) => {
                    return acc + row.reduce((rows, cell) => {
                        switch (cell) {
                            case GameCellState.Filled:
                                return rows + '■'
                            case GameCellState.Empty:
                                return rows + '×'
                            default:
                                return rows + '□';
                        }
                    }, '') + '\n'
                }, '')}
            </pre>
        </>
    );
}
export default Game;