export const getSpaceSequences = (value: number, spaces: number): Array<Array<number>> => {
    if (spaces <= 1){
        return [[value]]
    }
    const termNumbers = new Array(value + 1).fill(null).map((_, i, arr) => value - i);
    return termNumbers.reduce<Array<Array<number>>>((acc, term) => acc.concat(
        getSpaceSequences(value - term, spaces - 1).map(seq => [term].concat(seq))
    ), [])
}