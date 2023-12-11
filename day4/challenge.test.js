import {part1, part2} from "./challenge.js";
import {expect} from 'chai';
import fs from 'fs/promises';

describe('day4', () => {

    context('part1', () => {
        it('example 1', async () => {
            const input = [
                'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
                'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
                'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
                'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
                'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
                'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
            ];
            expect(part1(input)).to.be.eq(13);
        });

        it('real input', async () => {
            const file = await fs.readFile('day4/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part1(input)).to.be.eq(27454);
        });
    });

    context('part2', () => {
        it('example 1', async () => {
            const input = [
                'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
                'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
                'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
                'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
                'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
                'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
            ];
            expect(part2(input)).to.be.eq(30);
        });

        it('real input', async () => {
            const file = await fs.readFile('day4/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part2(input)).to.be.eq(6857330);
        });
    });
});