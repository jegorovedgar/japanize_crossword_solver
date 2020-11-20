import classNames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import './index.css';
export enum MatrixCellState {
    Filled,
    Empty,
    Null
}

export type MatrixCellProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    state?: MatrixCellState
}
export const MatrixCell = ({ state = MatrixCellState.Null, ...props }: MatrixCellProps) => (
    <button
        {...props}
        className={classNames({
            'matrix-cell': true,
            'matrix-cell-filled': state === MatrixCellState.Filled,
            'matrix-cell-empty': state === MatrixCellState.Empty
        })}
    ></button>
)
export default MatrixCell;