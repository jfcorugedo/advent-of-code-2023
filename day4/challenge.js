const part1 = function (input) {

    return input.map(
        card => card.substring(card.indexOf(':') + 2, card.length)
    ).map(
        card => card.split("|")
    ).map(
        card => ({winning: card[0], numbers: card[1]})
    ).map(
        card => ({
            winning: card.winning.split(" ").filter(v => v !== ''),
            numbers: card.numbers.split(" ").filter(v => v !== '')
        })
    ).map(
        card => card.numbers.filter(number => card.winning.some(winner => winner === number)).length
    ).map(
        winners => winners === 0 ? 0 : Math.pow(2, winners - 1)
    ).reduce((acc, cur) => acc + cur, 0);
}


// PART 2
const part2 = function (input) {

    const winningNumbers = input.map(
        card => card.substring(card.indexOf(':') + 2, card.length)
    ).map(
        card => card.split("|")
    ).map(
        card => ({winning: card[0], numbers: card[1]})
    ).map(
        card => ({
            winning: card.winning.split(" ").filter(v => v !== ''),
            numbers: card.numbers.split(" ").filter(v => v !== '')
        })
    ).map(
        card => card.numbers.filter(number => card.winning.some(winner => winner === number)).length
    );

    return winningNumbers.reduce((acc, cur, index) => {
            for (let i = 1; i <= cur; i++) {
                if (index + i < winningNumbers.length) {
                    acc[index + i] += acc[index];
                }
            }
            return acc;
        }, Array.from(winningNumbers, () => 1)
    ).reduce( (acc, cur) => acc + cur, 0);
}

export {part1, part2};