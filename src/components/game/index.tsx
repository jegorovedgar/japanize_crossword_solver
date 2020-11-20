import React from "react";
import { GameMatrix, Playground } from "./playground";
import { Definition, GameDefinitionSequence } from "./definition";
import './index.css';

export type GameDefinition = { x: GameDefinitionSequence, y: GameDefinitionSequence };
export interface GameProps {
    definition: GameDefinition,
    matrix: GameMatrix,
    onDefChange?: (definition: GameDefinition) => void
    onPlaygroundChange?: (matrix: GameMatrix) => void
}
const Game = ({ definition, matrix, onDefChange = () => { }, onPlaygroundChange = () => {} }: GameProps) => {
    const definitionChangeHandler = (key: keyof GameDefinition) => (def: GameDefinitionSequence) => onDefChange({
        ...definition,
        [key]: def
    })
    return (
        <div className="game">
            <div className="game-row">
                <div className="game-col"></div>
                <div className="game-col">
                    <Definition definition={definition.x} onChange={definitionChangeHandler('x')} horizontal={true}/>
                </div>
            </div>
            <div className="game-row">
                <div className="game-col">
                    <Definition definition={definition.y} onChange={definitionChangeHandler('y')}/>
                </div>
                <div className="game-col">
                    <Playground matrix={matrix} onChange={onPlaygroundChange}/>
                </div>
            </div>
        </div>
    );
}
export default Game;