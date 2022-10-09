import { Queue } from "./index";

describe("Queue", () => {
    describe("GIVEN a queue", () => {
        describe("WHEN it is created", () => {
            it("THEN it should be empty", () => {
                const queue = new Queue();

                expect(queue.length).toBe(0);
            });
        });
    });

    describe(`WHEN it is 'peeked'`, () => {
        describe(`AND the queue is empty`, () => {
            it("THEN it should return undefined", () => {
                const queue = new Queue();

                expect(queue.peek()).toBeUndefined();
            });
        });

        describe(`AND the queue isn't empty`, () => {
            it("THEN the next item in the queue should be returned", () => {
                const queue = new Queue();
                const item = "123";

                queue.enqueue(item);

                expect(queue.length).toBe(1);
                expect(queue.peek()).toBe(item);
                expect(queue.length).toBe(1);
            });
        });
    });

    describe(`WHEN it is 'enqueued' (pushed to)`, () => {
        it("THEN the length should increase, and the item should be stored", () => {
            const queue = new Queue();

            const item = "123";
            queue.enqueue(item);

            expect(queue.length).toBe(1);
            expect(queue.peek()).toBe(item);
        });

        describe(`AND WHEN it is 'enqueued' multiple times`, () => {
            it("THEN the length should increase, and all of the items should be stored", () => {
                const queue = new Queue();
                const first_item = "123";

                queue.enqueue(first_item);

                expect(queue.length).toBe(1);
                expect(queue.peek()).toBe(first_item);

                const second_item = "321";
                queue.enqueue(second_item);

                expect(queue.length).toBe(2);
                expect(queue.peek()).toBe(first_item);
            });
        });
    });

    describe(`WHEN it is 'dequeued' (popped from)`, () => {
        it("THEN the length should decrease, and the current item should be removed", () => {
            const queue = new Queue();
            const first_item = "123";
            const second_item = "321";

            queue.enqueue(first_item);
            queue.enqueue(second_item);

            expect(queue.length).toBe(2);
            expect(queue.peek()).toBe(first_item);

            queue.dequeue();

            expect(queue.length).toBe(1);
            expect(queue.peek()).toBe(second_item);
        });

        describe(`AND WHEN it is 'dequeued' multiple times`, () => {
            it("THEN the length should decrease, and the current item should be removed", () => {
                const queue = new Queue();
                const first_item = "123";
                const second_item = "321";
                const third_item = "456";

                queue.enqueue(first_item);
                queue.enqueue(second_item);
                queue.enqueue(third_item);

                expect(queue.length).toBe(3);
                expect(queue.peek()).toBe(first_item);

                queue.dequeue();

                expect(queue.length).toBe(2);
                expect(queue.peek()).toBe(second_item);

                queue.dequeue();

                expect(queue.length).toBe(1);
                expect(queue.peek()).toBe(third_item);
            });
        });

        describe(`AND it is empty`, () => {
            it("THEN it should return undefined", () => {
                const queue = new Queue();

                expect(queue.dequeue()).toBeUndefined();
            });
        });
    });
});
