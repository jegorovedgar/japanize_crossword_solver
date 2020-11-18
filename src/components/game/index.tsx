import React from "react";
import { GameMatrix, Playground } from "./playground";
import { Definition, GameDefinitionSequence } from "./definition";
import './index.css';

export type GameDefinition = { x: GameDefinitionSequence, y: GameDefinitionSequence };
export interface GameProps {
    definition: GameDefinition,
    matrix: GameMatrix
}
const Game = ({ definition, matrix }: GameProps) => {
    return (
        <div className="game">
            <div className="game-row">
                <div className="game-col"></div>
                <div className="game-col">
                    <Definition definition={definition.x} horizontal={true}/>
                </div>
            </div>
            <div className="game-row">
                <div className="game-col">
                    <Definition definition={definition.y} />
                </div>
                <div className="game-col">
                    <Playground matrix={matrix} />
                </div>
            </div>
        </div>
    );
}
export default Game;