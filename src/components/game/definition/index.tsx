import classNames from "classnames";
import React from "react";
import DefinitionCell from "../cells/definition-cell";
import './index.css';

export type GameDefinitionSequence = Array<Array<number>>;

export interface DefinitionProps {
    definition: GameDefinitionSequence,
    horizontal?: boolean
}
export const Definition = ({ definition, horizontal = false }: DefinitionProps) => (
    <div className={classNames({
        'game-definition': true,
        'game-definition-horizontal': horizontal,
    })}>
        {definition.map((row, key) => (
            <div className="game-definition-row" key={'row'+key}>
                {row.map((cell, key) => <DefinitionCell value={cell} key={'cell' + key} />)}
            </div>
        ))}
    </div>
)