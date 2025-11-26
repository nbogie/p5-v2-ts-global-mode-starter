//TODO: use a much much simpler example as a test subject

/**
 * Creates an array of numElements containing the collected results of calling the given function repeatedly.
 * @example
 * Here's an example where we want to collect 100 random numbers from 0 to 5.
 *
 * ```const myNumbers = collect(100, () => random(0, 5))```
 *
 * @param numElements
 * @param creatorFn
 * @returns
 */
export function collect<T>(
    numElements: number,
    creatorFn: (index: number) => T
): T[] {
    const results = [];
    for (let i = 0; i < numElements; i++) {
        results.push(creatorFn(i));
    }
    return results;
}
