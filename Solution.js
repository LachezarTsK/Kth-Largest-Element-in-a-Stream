
const {PriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number} k_largestElement
 * @param {number[]} stream
 */
var KthLargest = function (k_largestElement, stream) {
    this.k_largestElement = k_largestElement;
    this.minHeap = new MinPriorityQueue({compare: (x, y) => x - y});

    for (let value of stream) {
        this.minHeap.enqueue(value);
        if (this.minHeap.size() > k_largestElement) {
            this.minHeap.dequeue();
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
KthLargest.prototype.add = function (value) {
    this.minHeap.enqueue(value);
    if (this.minHeap.size() > this.k_largestElement) {
        this.minHeap.dequeue();
    }
    return this.minHeap.front();
};
