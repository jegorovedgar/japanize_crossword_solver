import React from "react";
import MatrixCell, { MatrixCellState } from "../cells/matrix-cell";
import './index.css';
export type GameMatrix = Array<Array<MatrixCellState>>;
export interface PlaygroundProps {
    matrix: GameMatrix
}
export const Playground = ({ matrix }: PlaygroundProps) => (
    <div className="playground">
        {matrix.map((row, key) => (
            <div className="playground-row" key={'playground'+key}>
                {row.map((state, key) => <MatrixCell state={state} key={'playground' + key}/>)}
            </div>
        ))}
    </div>
);