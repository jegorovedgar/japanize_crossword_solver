import { MatrixCellState } from "../components/game/cells/matrix-cell"
import { getCellsSequences, getMatrixCol, getMatrixRow, getRequiredCells, getSpaceSequences } from "./solver"

describe('solver', () => {
    describe('getSpaceSequences', () => {
        it('should return sequences for value: 2 and 2 spaces', () => {
            expect(getSpaceSequences(2, 2)).toEqual([
                [2, 0],
                [1, 1],
                [0, 2],
            ])
        })
        it('should return sequences for value: 3 and 2 spaces', () => {
            expect(getSpaceSequences(3, 2)).toEqual([
                [3, 0],
                [2, 1],
                [1, 2],
                [0, 3],
            ])
        })
        it('should return sequences for value: 4 and 3 spaces', () => {
            expect(getSpaceSequences(4, 3)).toEqual([
                [4, 0, 0],
                [3, 1, 0],
                [3, 0, 1],
                [2, 2, 0],
                [2, 1, 1],
                [2, 0, 2],
                [1, 3, 0],
                [1, 2, 1],
                [1, 1, 2],
                [1, 0, 3],
                [0, 4, 0],
                [0, 3, 1],
                [0, 2, 2],
                [0, 1, 3],
                [0, 0, 4],
            ])
        })
        it('should return sequences for value: 5 and 5 spaces', () => {
            expect(getSpaceSequences(5, 5).length).toBe(126)
        })
        it('should return sequences for value: 10 and 10 spaces', () => {
            expect(getSpaceSequences(10, 10).length).toBe(92378)
        })
    })

    describe('getRequiredCells', () => {
        it('should return required cells for [1, 2]', () => {
            expect(getRequiredCells([1, 2])).toEqual([
                [MatrixCellState.Filled, MatrixCellState.Empty],
                [MatrixCellState.Filled, MatrixCellState.Filled],
            ])
        })

        it('should return required cells for [1, 2, 1]', () => {
            expect(getRequiredCells([1, 2, 1])).toEqual([
                [MatrixCellState.Filled, MatrixCellState.Empty],
                [MatrixCellState.Filled, MatrixCellState.Filled, MatrixCellState.Empty],
                [MatrixCellState.Filled],
            ])
        })


        it('should return required cells for [1]', () => {
            expect(getRequiredCells([1])).toEqual([
                [MatrixCellState.Filled],
            ])
        })

        it('should return required cells for []', () => {
            expect(getRequiredCells([])).toEqual([])
        })
    });

    describe('getCellsSequences', () => {
        it('should return sequence for [1, 1] and size: 4', () => {
            expect(getCellsSequences([1, 1], 4)).toEqual([
                [MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Filled],
                [MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Filled],
                [MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty],
            ])
        });


        it('should return sequence for [1, 1] and size: 5', () => {
            expect(getCellsSequences([1, 1], 5)).toEqual([
                [MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Filled],
                [MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Filled],
                [MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty],
                [MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Filled],
                [MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty],
                [MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Filled, MatrixCellState.Empty, MatrixCellState.Empty],
            ])
        });
    })

    describe('getMatrixRow', () => {
        it('should return matrix row', () => {
            expect(getMatrixRow([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ], 1)).toEqual([4, 5, 6])
        });
    });

    describe('getMatrixCol', () => {
        it('should return matrix col', () => {
            expect(getMatrixCol([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ], 1)).toEqual([2, 5, 8])
        });
    });
})