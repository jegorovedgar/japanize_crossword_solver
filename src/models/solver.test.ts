import { getSpaceSequences } from "./solver"

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
})