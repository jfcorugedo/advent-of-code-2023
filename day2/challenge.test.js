import {part1, part2} from "./challenge.js";
import {expect} from 'chai';
import fs from 'fs/promises';

describe('day2', () => {

    context('part1', () => {
        it('example 1', async () => {
            const input = [
                'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
                'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
                'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
                'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
                'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
            ];
            expect(part1(input)).to.be.eq(8);
        });

        it('real input', async () => {
            const file = await fs.readFile('day2/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part1(input)).to.be.eq(2164);
        });
    });

    context('part2', () => {
        it('example 1', async () => {
            const input = [
                'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
                'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
                'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
                'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
                'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
            ];
            expect(part2(input)).to.be.eq(2286);
        });

        it('real input', async () => {
            const file = await fs.readFile('day2/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part2(input)).to.be.eq(69929);
        });
    });
});