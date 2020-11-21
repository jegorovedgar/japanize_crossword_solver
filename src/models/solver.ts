import { GameDefinition } from "../components/game";
import { MatrixCellState } from "../components/game/cells/matrix-cell";
import { GameDefinitionSequence } from "../components/game/definition";
import { GameMatrix } from "../components/game/playground";

export type DefinedMatrixCellState = MatrixCellState.Empty | MatrixCellState.Filled;

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

export const getMatrixRow = (matrix: GameMatrix, x: number) => matrix[x].slice()
export const getMatrixCol = (matrix: GameMatrix, y: number) => matrix.map(row => row[y]);

export const solveStep = (matrix: GameMatrix, definitions: GameDefinition): GameMatrix => {
    // 1. generate cell sequences
    // 2. get rid of invalid sequences
    // 3. get aligned cells
    return [];
}