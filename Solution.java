
import java.util.PriorityQueue;

public class KthLargest {

    PriorityQueue<Integer> minHeap;
    int k_largestElement;

    public KthLargest(int k_largestElement, int[] stream) {
        this.k_largestElement = k_largestElement;
        minHeap = new PriorityQueue<>();

        for (int value : stream) {
            minHeap.add(value);
            if (minHeap.size() > k_largestElement) {
                minHeap.poll();
            }
        }
    }

    public int add(int value) {
        minHeap.add(value);
        if (minHeap.size() > k_largestElement) {
            minHeap.poll();
        }
        return minHeap.peek();
    }
}
