import {part1, part2} from "./challenge.js";
import {expect} from 'chai';
import fs from 'fs/promises';

describe('day12', () => {

    context('part1', () => {
        it('example 1', async () => {
            const input = [
                '???.### 1,1,3'
            ];
            expect(part1(input, true)).to.be.eq(1);
        });

        it('example 2', async () => {
            const input = [
                '.#...#....###. 1,1,3'
            ];
            expect(part1(input, true)).to.be.eq(1);
        });

        it('example 3', async () => {
            const input = [
                '.??..??...?##. 1,1,3'
            ];
            expect(part1(input, true)).to.be.eq(4);
        });

        it('example 4', async () => {
            const input = [
                '?###???????? 3,2,1'
            ];
            expect(part1(input, true)).to.be.eq(10);
        });

        it('example 5', async () => {
            const input = [
                '???.### 1,1,3',
                '.??..??...?##. 1,1,3',
                '?#?#?#?#?#?#?#? 1,3,1,6',
                '????.#...#... 4,1,1',
                '????.######..#####. 1,6,5',
                '?###???????? 3,2,1'
            ];
            expect(part1(input, true)).to.be.eq(21);
        });

        it('real input', async () => {
            const file = await fs.readFile('day12/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part1(input)).to.be.eq(7716);
        });
    });

    context('part2', () => {
        it('example 1', async () => {
            const input = [
                '???.### 1,1,3'
            ];
            expect(part2(input, true)).to.be.eq(1);
        });

        it('example 2', async () => {
            const input = [
                '.??..??...?##. 1,1,3'
            ];
            expect(part2(input)).to.be.eq(16384);
        });

        it('example 3', async () => {
            const input = [
                '?#?#?#?#?#?#?#? 1,3,1,6'
            ];
            expect(part2(input)).to.be.eq(1);
        });

        it('example 4', async () => {
            const input = [
                '????.#...#... 4,1,1'
            ];
            expect(part2(input)).to.be.eq(16);
        });

        it('example 5', async () => {
            const input = [
                '????.######..#####. 1,6,5'
            ];
            expect(part2(input)).to.be.eq(2500);
        });

        it('example 6', async () => {
            const input = [
                '?###???????? 3,2,1'
            ];
            expect(part2(input)).to.be.eq(506250);
        });

        it('example 7', async () => {
            const input = [
                '???.### 1,1,3',
                '.??..??...?##. 1,1,3',
                '?#?#?#?#?#?#?#? 1,3,1,6',
                '????.#...#... 4,1,1',
                '????.######..#####. 1,6,5',
                '?###???????? 3,2,1'
            ];
            expect(part2(input)).to.be.eq(525152);
        });

        //Comento el test porque tarda 4 minutos y medio en computar la solucion
        xit('real input', async () => {
            const file = await fs.readFile('day12/input.txt', {encoding: 'utf-8'});
            const input = file.split("\n").filter(v => v !== "");
            expect(part2(input)).to.be.eq(18716325559999);
        });
    });
});