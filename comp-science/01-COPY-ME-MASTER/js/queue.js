class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    get first() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

var newQueue = new Queue();

newQueue.enqueue("Ahmad");
newQueue.enqueue("Roger");
newQueue.enqueue("John");

console.log(newQueue.first);

// the info from 08 student exercise for queues is what you need to add here....  the last line of that
