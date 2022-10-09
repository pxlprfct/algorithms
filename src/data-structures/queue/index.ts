type Node<T> = {
    value: T;
    next?: Node<T>;
};

export class Queue<T> {
    public length: number;
    private head?: Node<T> | undefined;
    private tail?: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length += 1;
        const node = { value: item };

        if (!this.tail) {
            this.tail = node;
            this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length -= 1;

        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
