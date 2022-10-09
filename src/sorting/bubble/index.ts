export const bubbleSort = (array: Array<number>) => {
    const totalLength = array.length;

    for (let i = 0; i < totalLength; i++) {
        const unsortedLength = totalLength - i - 1;

        for (let j = 0; j < unsortedLength; j++) {
            if (array[j] > array[j + 1]) {
                const bigger = array[j];
                const smaller = array[j + 1];

                array[j] = smaller;
                array[j + 1] = bigger;
            }
        }
    }

    return array;
};
