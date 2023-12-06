import { part1, part2 }  from "./challenge.js";
import { expect } from 'chai';
import fs from 'fs/promises';
describe('day1', () => {

    context('part1', () => {
        it('example 1', async () => {
            const input = [
                '1abc2',
                'pqr3stu8vwx',
                'a1b2c3d4e5f',
                'treb7uchet'
            ];
            expect(part1(input)).to.be.eq(142);
        });

        it('real input', async () => {
            const file = await fs.readFile('day1/input.txt', { encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part1(input)).to.be.eq(54953);
        });
    });

    context('part2', () => {
        it('example 1', async () => {
            const input = [
                'two1nine',
                'eightwothree',
                'abcone2threexyz',
                'xtwone3four',
                '4nineeightseven2',
                'zoneight234',
                '7pqrstsixteen'
            ];
            expect(part2(input)).to.be.eq(281);
        });

        it('real input', async () => {
            const file = await fs.readFile('day1/input.txt', { encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part2(input)).to.be.eq(53868);
        });
    });
});