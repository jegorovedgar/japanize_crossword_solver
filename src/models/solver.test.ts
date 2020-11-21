import { MatrixCellState } from "../components/game/cells/matrix-cell"
import { alignSequenceCells, filterInvalidSequences, getCellsSequences, getMatrixCol, getMatrixRow, getRequiredCells, getSpaceSequences, solveRow } from "./solver"
const Filled = MatrixCellState.Filled;
const Empty = MatrixCellState.Empty;
const Null = MatrixCellState.Null;
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
                [Filled, Empty],
                [Filled, Filled],
            ])
        })

        it('should return required cells for [1, 2, 1]', () => {
            expect(getRequiredCells([1, 2, 1])).toEqual([
                [Filled, Empty],
                [Filled, Filled, Empty],
                [Filled],
            ])
        })


        it('should return required cells for [1]', () => {
            expect(getRequiredCells([1])).toEqual([
                [Filled],
            ])
        })

        it('should return required cells for []', () => {
            expect(getRequiredCells([])).toEqual([])
        })
    });

    describe('getCellsSequences', () => {
        it('should return sequence for [] and size: 3', () => {
            expect(getCellsSequences([], 3)).toEqual([
                [Empty, Empty, Empty],
            ])
        });

        it('should return sequence for [3] and size: 3', () => {
            expect(getCellsSequences([3], 3)).toEqual([
                [Filled, Filled, Filled],
            ])
        });

        it('should return sequence for [1, 1] and size: 4', () => {
            expect(getCellsSequences([1, 1], 4)).toEqual([
                [Empty, Filled, Empty, Filled],
                [Filled, Empty, Empty, Filled],
                [Filled, Empty, Filled, Empty],
            ])
        });


        it('should return sequence for [1, 1] and size: 5', () => {
            expect(getCellsSequences([1, 1], 5)).toEqual([
                [Empty, Empty, Filled, Empty, Filled],
                [Empty, Filled, Empty, Empty, Filled],
                [Empty, Filled, Empty, Filled, Empty],
                [Filled, Empty, Empty, Empty, Filled],
                [Filled, Empty, Empty, Filled, Empty],
                [Filled, Empty, Filled, Empty, Empty],
            ])
        });
    })

    describe('filterInvalidSequences', () => {
        it('scenario 1', () => {
            expect(
                filterInvalidSequences(
                    getCellsSequences([1, 1], 5),
                    [Filled, Null, Null, Null, Empty],
                )
            ).toEqual([
                [Filled, Empty, Empty, Filled, Empty],
                [Filled, Empty, Filled, Empty, Empty],
            ])
        })

        it('scenario 2', () => {
            expect(
                filterInvalidSequences(
                    getCellsSequences([1, 1], 5),
                    [Filled, Null, Null, Filled, Null],
                )
            ).toEqual([
                [Filled, Empty, Empty, Filled, Empty],
            ])
        })
    })

    describe('alignSequenceCells', () => {
        it('scenario 1', () => {
            expect(
                alignSequenceCells(
                    [
                        [Filled, Empty, Empty, Filled, Empty],
                        [Filled, Empty, Filled, Empty, Empty]
                    ],
                    [Filled, Null, Null, Null, Null],
                )
            ).toEqual([Filled, Empty, Null, Null, Empty])
        })
    })

    describe('solveRow', () => {
        it('scenario 1', () => {
            expect(
                solveRow(
                    [Filled, Null, Null, Null, Empty],
                    [1, 1]
                )
            ).toEqual([Filled, Empty, Null, Null, Empty])
        })
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