const part1 = function(input) {
    return input.map(word => word.split('').filter(symbol => Number(symbol)))
        .map(digits => digits.length < 2 ? Number(String(digits[0])+String(digits[0])) : Number(String(digits[0])+String(digits[digits.length-1])))
        .reduce((acc, cur) => acc + cur, 0);
}

// PART 2
const replaceNumbers = (word) => {
    return word.replaceAll("twone", "21")
        .replaceAll("eightwo", "82")
        .replaceAll("eighthree", "83")
        .replaceAll("oneight", "18")
        .replaceAll("threeight", "38")
        .replaceAll("fiveight", "58")
        .replaceAll("sevenine", "79")
        .replaceAll("nineight", "98")
        .replaceAll("one", "1")
        .replaceAll("two", "2")
        .replaceAll("three", "3")
        .replaceAll("four", "4")
        .replaceAll("five", "5")
        .replaceAll("six", "6")
        .replaceAll("seven", "7")
        .replaceAll("eight", "8")
        .replaceAll("nine", "9");
}
const part2 = function(input) {
    return input.map(word => replaceNumbers(word))
        .map(word => word.split('').filter(symbol => Number(symbol)))
        .map(digits => digits.length < 2 ? Number(String(digits[0])+String(digits[0])) : Number(String(digits[0])+String(digits[digits.length-1])))
        .reduce((acc, cur) => acc + cur, 0);
}

export { part1, part2 };