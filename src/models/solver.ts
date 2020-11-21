import { GameDefinition } from "../components/game";
import { MatrixCellState } from "../components/game/cells/matrix-cell";
import { GameDefinitionSequence } from "../components/game/definition";
import { GameMatrix } from "../components/game/playground";

export type DefinedMatrixCellState = MatrixCellState.Empty | MatrixCellState.Filled;
export const getMatrixRow = (matrix: GameMatrix, y: number) => matrix[y].slice()
export const setMatrixRow = (matrix: GameMatrix, row: GameMatrix[0], y: number) => {
    const m = matrix.slice();
    m[y] = row.slice();
    return m;
}
export const getMatrixCol = (matrix: GameMatrix, x: number) => matrix.map(row => row[x]);
export const setMatrixCol = (matrix: GameMatrix, col: GameMatrix[0], x: number) => matrix.map((row, y) => {
    const r = row.slice();
    r[x] = col[y];
    return r;
});
export const getSpaceSequences = (value: number, spaces: number): Array<Array<number>> => {
    if (spaces <= 1) {
        return [[value]]
    }
    const termNumbers = new Array(value + 1).fill(null).map((_, i, arr) => value - i);
    return termNumbers.reduce<Array<Array<number>>>((acc, term) => 
        acc.concat(
            getSpaceSequences(value - term, spaces - 1)
                .map(seq => [term].concat(seq))
        )
    , [])
}

export const getRequiredCells = (definition: GameDefinitionSequence[0]): Array<Array<DefinedMatrixCellState>> => {
    return definition.map((size, i) =>
        new Array(size).fill(null)
            .map<DefinedMatrixCellState>(() => MatrixCellState.Filled)
            .concat(i < definition.length - 1 ? [MatrixCellState.Empty] : [])
    )
}

export const getCellsSequences = (definition: GameDefinitionSequence[0], totalSize: number): Array<Array<DefinedMatrixCellState>> => {
    //   1. get array of required cells
    const requiredCells = getRequiredCells(definition);
    const requiredSize = requiredCells.reduce((total, cells) => total + cells.length, 0);

    //   2. get spaces sequences
    const spacesSequences = getSpaceSequences(totalSize - requiredSize, requiredCells.length + 1);
    //   3. map spaces with cells
    return spacesSequences.map(spaces =>
        spaces.reduce<Array<DefinedMatrixCellState>>((acc, spaceSize, i) =>
            acc.concat(
                new Array(spaceSize).fill(null)
                    .map<DefinedMatrixCellState>(() => MatrixCellState.Empty)
                    .concat(requiredCells[i] || [])
            )
        , [])
    )
}

export const filterInvalidSequences = (sequence: Array<Array<DefinedMatrixCellState>>, reference: GameMatrix[0]): Array<Array<DefinedMatrixCellState>> => {
    return sequence.filter(cells => cells.every((cell, i) => (
        reference[i] === MatrixCellState.Null || reference[i] === cell
    )))
}

export const alignSequenceCells = (sequence: Array<Array<DefinedMatrixCellState>>, reference: GameMatrix[0]): GameMatrix[0] => {
    return reference.map((refCell, i) => {
        if (refCell === MatrixCellState.Null && sequence.every((seq) => seq[i] === sequence[0][i])) {
            return sequence[0][i];
        }
        return refCell
    })
}

export const solveRow = (row: GameMatrix[0], definition: GameDefinitionSequence[0]): GameMatrix[0] => {
    // 1. generate cell sequences
    const sequence = getCellsSequences(definition, row.length);
    // 2. get rid of invalid sequences
    const validSequence = filterInvalidSequences(sequence, row);
    // 3. get aligned cells
    return alignSequenceCells(validSequence, row)
}

export const solveStep = (matrix: GameMatrix, definitions: GameDefinition): GameMatrix => {
    const m1 = definitions.x.reduce((acc, def, i) => {
        return setMatrixCol(acc, solveRow(getMatrixCol(acc, i), def), i);;
    }, [...matrix])
    const m2 = definitions.y.reduce((acc, def, i) => {
        return setMatrixRow(acc, solveRow(getMatrixRow(acc, i), def), i);;
    }, [...m1])
    return m2;
}