import classNames from "classnames";
import React from "react";
import './index.css';
export enum MatrixCellState {
    Filled,
    Empty,
    Null
}
export interface MatrixCellProps {
    state?: MatrixCellState
}
export const MatrixCell = ({ state = MatrixCellState.Null }: MatrixCellProps) => <div className={classNames({
    'matrix-cell': true,
    'matrix-cell-filled': state === MatrixCellState.Filled,
    'matrix-cell-empty': state === MatrixCellState.Empty
})}></div>
export default MatrixCell;