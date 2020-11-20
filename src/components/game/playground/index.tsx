import React from "react";
import MatrixCell, { MatrixCellState } from "../cells/matrix-cell";
import './index.css';
export type GameMatrix = Array<Array<MatrixCellState>>;
export interface PlaygroundProps {
    matrix: GameMatrix,
    onChange?: (matrix: GameMatrix) => void
}
export const Playground = ({ matrix, onChange = () => {} }: PlaygroundProps) => {
    const clickHandler = (x: number, y: number) => () => {
        const temp = matrix.map(m => m.slice());
        temp[x][y] = ++temp[x][y] > MatrixCellState.Null ? MatrixCellState.Filled : temp[x][y]
        onChange(temp);
    }
    return (
        <div className="playground">
            {matrix.map((row, x) => (
                <div className="playground-row" key={'playground' + x}>
                    {row.map((state, y) => <MatrixCell key={'playground' + y} state={state} onClick={clickHandler(x, y)} />)}
                </div>
            ))}
        </div>
    )
};