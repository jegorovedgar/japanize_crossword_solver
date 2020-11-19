import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, Fragment } from "react";
import { AddCell } from "../cells/add-cell";
import DefinitionCell from "../cells/definition-cell";
import './index.css';

export type GameDefinitionSequence = Array<Array<number>>;

export interface DefinitionProps {
    definition: GameDefinitionSequence,
    horizontal?: boolean
    onChange?: (definition: GameDefinitionSequence) => void
}
export const Definition = ({ definition, horizontal = false, onChange = () => {}}: DefinitionProps) => {
    const changeHandler = (x: number, y: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const def = [...definition];
        def[x][y] = Math.max(0, parseInt(e.target.value) || 0);
        onChange(def);
    }
    const blurHandler = (x: number, y: number) => (e: FocusEvent<HTMLInputElement>) => {
        if (Math.max(0, parseInt(e.target.value) || 0) === 0) {
            const def = [...definition];
            def[x].splice(y, 1);
            onChange(def);
        }
    }
    return (
        <div className={classNames({
            'game-definition': true,
            'game-definition-horizontal': horizontal,
        })}>
            {definition.map((row, x) => (
                <div className="game-definition-row" key={'row' + x}>
                    <AddCell />
                    {row.map((cell, y) => (
                        <Fragment key={'cell' + y}>
                            <DefinitionCell value={cell} onChange={changeHandler(x, y)} onBlur={blurHandler(x, y)} />
                            <AddCell/>
                        </Fragment>
                    ))}
                </div>
            ))}
        </div>
    )
}