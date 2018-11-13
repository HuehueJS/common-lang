
class Generator implements Iterable<number>{

    constructor(
        private startAt: number,
        private endAt: number,
        private step: number
    ) {

    }

    [Symbol.iterator](): Iterator<number> {
        const [startAt, endAt, step] = [
            this.startAt,
            this.endAt,
            this.step
        ];
        let current = startAt;
        return {
            next(): IteratorResult<number> {
                while (current != endAt) {
                    const value = current;
                    current += step;
                    return { done: false, value }
                }
                return { done: true, value: null }
            }
        }
    }

}

export function range(arg0, arg1 = null, arg2 = null): Iterable<number> {
    const startAt = arg1 === null ? 0 : arg0
    const endAt = arg1 === null ? arg0 : arg1;
    const step = arg2 !== null ? arg2 : (startAt <= endAt ? 1 : -1)
    return new Generator(startAt, endAt, step)
}