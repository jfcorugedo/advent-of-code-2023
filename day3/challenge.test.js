import {part1, part2} from "./challenge.js";
import {expect} from 'chai';
import fs from 'fs/promises';

describe('day3', () => {

    context('part1', () => {
        it('example 1', async () => {
            const input = [
                '467..114..', 
                '...*......', 
                '..35..633.', 
                '......#...', 
                '617*......', 
                '.....+.58.', 
                '..592.....', 
                '......755.', 
                '...$.*....', 
                '.664.598..'
            ];
            expect(part1(input)).to.be.eq(4361);
        });

        it('real input', async () => {
            const file = await fs.readFile('day3/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part1(input)).to.be.eq(509115);
        });
    });

    context('part2', () => {
        it('example 1', async () => {
            const input = [
                '467..114..',
                '...*......',
                '..35..633.',
                '......#...',
                '617*......',
                '.....+.58.',
                '..592.....',
                '......755.',
                '...$.*....',
                '.664.598..'
            ];
            expect(part2(input)).to.be.eq(467835);
        });

        it('real input', async () => {
            const file = await fs.readFile('day3/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part2(input)).to.be.eq(75220503);
        });
    });
});