import {getHigherThanLastNumber, getHigherThreeThanLastThreeNumber, getInput} from "./01";

test('should load input', async () => {
    const theInput = await getInput()
    expect(theInput.length).toBe(2000);
});


test('should return answer', async () => {
    const theInput = await getInput()
    expect(getHigherThanLastNumber(theInput)).toBe(1466);
});

test('should return second answer', async () => {
    const theInput = await getInput()
    expect(getHigherThreeThanLastThreeNumber(theInput)).toBe(1491);
});
