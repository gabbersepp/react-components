class EventQueue {
    private functions: (() => void)[] = [];
    private handles: number[] = [];

    public queue(fn: () => any, ms: number): void {
        this.clear(fn);
        const handle: number = window.setTimeout(fn, ms);
        this.functions.push(fn);
        this.handles.push(handle);
    }

    public clear(fn: () => any): void {
        const index: number = this.functions.indexOf(fn);
        if (index > -1) {
            clearTimeout(this.handles[index]);
            this.functions.splice(index, 1);
            this.handles.splice(index, 1);
        }
    }
}

const eventQueue = new EventQueue();

export default eventQueue;