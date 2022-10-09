import { bubbleSort } from ".";

describe("Bubble Sort", () => {
    describe("GIVEN an unsorted array", () => {
        describe("WHEN bubble sorted", () => {
            it("THEN the array should be sorted", () => {
                const items = [3, 2, 1];
                const sorted = bubbleSort(items);

                expect(sorted).toEqual([1, 2, 3]);
            });
        });
    });
});
