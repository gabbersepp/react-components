declare class EventQueue {
    private functions;
    private handles;
    queue(fn: () => any, ms: number): void;
    clear(fn: () => any): void;
}
declare const eventQueue: EventQueue;
export default eventQueue;
