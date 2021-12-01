/* eslint-disable no-plusplus */
import { createInterface } from 'readline';
import { createReadStream } from 'fs';
import { once } from 'events';

export const getInput = async () => {
    const fileStream = createReadStream('src/2021/01/input.txt');
    const readInterface = createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    const input = [];

    readInterface.on('line', (line) => {
        input.push(parseInt(line, 10));
    });

    await once(readInterface, 'close');

    return input;
};

export const getHigherThanLastNumber = (input) => {
    let higherThanLastNumberCount = 0;

    input.forEach((number, index, array) => {
        if (number > array[index - 1]) {
            higherThanLastNumberCount++;
        }
    });

    return higherThanLastNumberCount;
};

export const getHigherThreeThanLastThreeNumber = (input) => {
    let higherThanLastNumberCount = 0;
    let lastThreeNumbers = input[0] + input[1] + input[2];

    input.forEach((number, index, array) => {
        if (index >= 3) {
            const currentSlidingThreeNumbers = array[index] + array[index-1] + array[index-2];
            if ((array[index] + array[index-1] + array[index-2]) > lastThreeNumbers) {
                higherThanLastNumberCount++;
            }
            lastThreeNumbers = currentSlidingThreeNumbers;
        }
        });

    return higherThanLastNumberCount;
};
