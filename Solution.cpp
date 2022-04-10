
#include <queue>
#include <vector>
using namespace std;

class KthLargest {
    
    priority_queue<int, vector<int>, greater<int>> minHeap;
    int k_largestElement;
    
public:

    KthLargest(int k_largestElement, vector<int>& stream) {
        this->k_largestElement = k_largestElement;
        for (const auto& value : stream) {
            minHeap.push(value);
            if (minHeap.size() > k_largestElement) {
                minHeap.pop();
            }
        }
    }

    int add(int value) {
        minHeap.push(value);
        if (minHeap.size() > k_largestElement) {
            minHeap.pop();
        }
        return minHeap.top();
    }
};
