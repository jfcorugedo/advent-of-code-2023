const isSymbol = (text) => {
    return /^[^.\d]+/g.test(text);
}

const checkCharacter = (rowIndex, columnIndex, matrix) => {
    if (rowIndex < 0 || rowIndex >= matrix.length) return false;
    if (columnIndex < 0 || columnIndex >= matrix[rowIndex].length) return false;

    return isSymbol(matrix[rowIndex][columnIndex]);
}

const part1 = function (input) {
    const result = input
        .map(row => row.split(""))
        .map((row, rowIndex, matrix) => {
            return row.reduce((acc, cur, columnIndex) => {
                const number = Number(cur);
                if (number >= 0) {
                    acc.number += cur;
                    if (!acc.nextToSymbol) {
                        acc.nextToSymbol = checkCharacter(rowIndex, columnIndex - 1, matrix) ||
                            checkCharacter(rowIndex, columnIndex + 1, matrix) ||
                            checkCharacter(rowIndex - 1, columnIndex, matrix) ||
                            checkCharacter(rowIndex - 1, columnIndex - 1, matrix) ||
                            checkCharacter(rowIndex - 1, columnIndex + 1, matrix) ||
                            checkCharacter(rowIndex + 1, columnIndex, matrix) ||
                            checkCharacter(rowIndex + 1, columnIndex - 1, matrix) ||
                            checkCharacter(rowIndex + 1, columnIndex + 1, matrix);
                    }
                    if(acc.nextToSymbol && columnIndex === matrix[rowIndex].length-1) {
                        acc.numbers.push(Number(acc.number));
                        acc.total += Number(acc.number);
                    }
                } else {
                    if (acc.nextToSymbol) {
                        acc.numbers.push(Number(acc.number));
                        acc.total += Number(acc.number);
                        acc.nextToSymbol = false;
                    }
                    acc.number = '';
                }
                return acc;
            }, {nextToSymbol: false, number: '', numbers: [], total: 0});
        });

    //console.log(result);

    return result.reduce((acc, cur) => acc + cur.total, 0);
}


// PART 2

const getCharacter = (matrix, rowIndex, columnIndex) => {
    if (rowIndex < 0 || rowIndex >= matrix.length) return '';
    if (columnIndex < 0 || columnIndex >= matrix[rowIndex].length) return '';

    return matrix[rowIndex][columnIndex];
}

function findNumbersInRow(matrix, rowIndex, columnIndex) {
    const row = [];
    if(Number(getCharacter(matrix, rowIndex, columnIndex - 1)) >= 0) {
        if(Number(getCharacter(matrix, rowIndex, columnIndex - 2)) >= 0) {
            row.push(getCharacter(matrix, rowIndex, columnIndex - 3))
        }
        row.push(getCharacter(matrix, rowIndex, columnIndex - 2));
    }
    row.push(getCharacter(matrix, rowIndex, columnIndex - 1));
    row.push(getCharacter(matrix, rowIndex, columnIndex));
    row.push(getCharacter(matrix, rowIndex, columnIndex + 1));
    if(Number(getCharacter(matrix, rowIndex, columnIndex + 1)) >= 0) {
        row.push(getCharacter(matrix, rowIndex, columnIndex + 2));
        if(Number(getCharacter(matrix, rowIndex, columnIndex + 2)) >= 0) {
            row.push(getCharacter(matrix, rowIndex, columnIndex + 3));
        }
    }

    const result = row.reduce((acc, cur, index, row) => {
        const number = Number(cur);
        if (number >= 0) {
            acc.number += cur;
            if (index === row.length - 1) acc.numbers.push(Number(acc.number));
        } else {
            if (/\d/g.test(acc.number)) acc.numbers.push(Number(acc.number));
            acc.number = '';
        }
        return acc;
    }, {number: '', numbers: []})

    return result.numbers;
}

const part2 = function (input) {
    const result = input
        .map(row => row.split(""))
        .map((row, rowIndex, matrix) => {
            return row.reduce((acc, cur, columnIndex) => {
                if (cur === '*') {
                    const adjacentNumbers = [...findNumbersInRow(matrix, rowIndex - 1, columnIndex),
                        ...findNumbersInRow(matrix, rowIndex, columnIndex),
                        ...findNumbersInRow(matrix, rowIndex + 1, columnIndex)];

                    if(adjacentNumbers.length === 2) {
                        const gearRatio = adjacentNumbers.reduce((acc, cur) => acc*cur, 1);
                        acc.gearRatios.push(gearRatio);
                        acc.total += gearRatio;
                    }
                }
                return acc;
            }, {gearRatios: [], total: 0});
        });

    //console.log(result);

    return result.reduce((acc, cur) => acc + cur.total, 0);
}

export {part1, part2};