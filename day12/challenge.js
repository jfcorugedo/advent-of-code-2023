const part1 = function (input, debug = false) {

    const cache = {};

    /**
     * Chequea un patron de entrada contra otro patron objetivo.
     * Si los caracteres son los mismos o el patron objetivo tiene una interrogacion, retorna true.
     * En cualquier otro caso retorna false;
     *
     * Ej:
     *
     * groupMatches(['#', '.'], ['?','?']) => true
     * groupMatches(['#', '.'], ['?','.']) => true
     * groupMatches(['#', '.'], ['#','?']) => true
     * groupMatches(['#', '.'], ['?','.']) => true
     * groupMatches(['#', '.'], ['#','.']) => true
     * groupMatches(['#', '.'], ['.','?']) => false
     * groupMatches(['#', '.'], ['?','#']) => false
     *
     * @param source
     * @param target
     * @returns {*}
     */
    const groupMatches = (source, target) => {
        return source.every((spring, index) => spring === target[index] || target[index] === '?');
    }

    const processGroups = (groups, pattern) => {
        //Si hemos colocado todos los grupos y no queda nada o lo que queda son '.' o '?', el patron es valido
        if(groups.length === 0) {
            if ((pattern.length === 0 || pattern.every(v => v === '.' || v === '?'))) {
                return 1;
            } else {
                return 0;
            }
        }

        const cacheKey = groups[0].key + pattern.join(",");
        if(cache[cacheKey]) return cache[cacheKey];

        const [group, ...remainingGroups] = groups;

        let counter = 0;
        for(let i = 0 ; i < (pattern.length - group.remainingSize - group.size + 1) ; i++) {
            let targetPattern = pattern.slice(i, i + group.size);
            if(debug) {
                console.log(`${group.pattern} === ${targetPattern}: ${groupMatches(group.pattern, targetPattern)}`);
            }
            if(groupMatches(group.pattern, targetPattern)) {
                counter += processGroups(remainingGroups, pattern.slice(i + group.size));
            }
            //Nunca podemos movernos si el patron fuerza que haya un defectuoso en el elemento actual
            if(targetPattern[0] === '#') break;
        }

        cache[cacheKey] = counter;
        return counter;
    }

    if(debug) {
        console.log(input);
    }

    let total = 0;
    for (let index = 0 ; index < input.length ; index++) {
        const springs = input[index];
        console.log('Processing ' + index);

        let [pattern, groups] = springs.split(" ");
        groups = groups.split(",")
            .map(v => Number(v))
            .map((size, index, array) => ({pattern: "#".repeat(size) + (index < array.length-1 ? "." : "")}))
            .map(group => ({pattern: group.pattern.split("")}))
            .map(group => ({ ...group, size: group.pattern.length}))
            .map(
                (group, index, array) => ({ ...group, remainingSize: array.slice(index+1).reduce((a, c) => a+c.size, 0) })
            ).map(
                (group, index, array) => ({ ...group, key: array.slice(index).reduce((a, c) => a+c.pattern.join(""), "") })
            );
        pattern = pattern.split("");

        if(debug) {
            console.log(pattern);
            console.log(groups);
        }

        const sprintsCount = processGroups(groups, pattern);
        total += sprintsCount;

        console.log(`${springs}: ${sprintsCount}`);
        console.log(`Total: ${total}`);
    }

    return total;
}


// PART 2
const part2 = function (input, debug = false) {
    if(debug) {
        console.log("Part 2: " + input);
    }
    //Deberia ser tan sencillo como incrementar la muestra y usar el mismo algoritmo
    const largerInput = input.map(
        original => {
            const [pattern, groups] = original.split(" ");
            const unfoldPattern = ["", "", "", "", ""].fill(pattern).join("?");
            const unfoldGroups = ["", "", "", "", ""].fill(groups).join(",");
            return `${unfoldPattern} ${unfoldGroups}`;
        }
    );

    if(debug) {
        console.log("Unfold input: " + largerInput);
    }

    return part1(largerInput, debug);
}

export {part1, part2};