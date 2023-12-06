const processGame = (game) => {
    const gameId = Number(game.substring(5, game.indexOf(":")));
    return game.substring(game.indexOf(":")+1).split(";")
        .map(iteration => iteration.split(",").map(balls => balls.trim()))
        .reduce((acc, cur) => [...acc, ...cur], [])
        .reduce((acc, cur) => {
            const number = Number(cur.split(" ")[0]);
            const color = cur.split(" ")[1];
            if(acc[color] < number) acc[color] = number;
            return acc;
        }, {"red": 0 , "blue": 0, "green": 0, "id": gameId});
}

const part1 = function(input) {
    return input
        .map(game => processGame(game))
        .filter(game => game['red'] <= 12 && game['blue'] <= 14 && game['green'] <= 13)
        .reduce((acc, cur) => acc + cur.id, 0);
}

// PART 2
const part2 = function(input) {
    return input
        .map(game => processGame(game))
        .map(game => ({power: game.red * game.blue * game.green}))
        .reduce((acc, cur) => acc + cur.power, 0);
}

export { part1, part2 };