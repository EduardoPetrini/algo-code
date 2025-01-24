# Algorithm Collection

A TypeScript repository containing implementations of various algorithms and data structures, with comprehensive test coverage.

## Implemented Algorithms (24)

| Algorithm | Description | Time Complexity |
|-----------|-------------|-----------------|
| Binary Search | Classic binary search implementation for finding elements in a sorted array. | O(log n) |
| Branch Sums | Calculates the sum of all paths from root to leaf nodes in a binary tree. | O(n) |
| Bubble Sort | Sorts an array by repeatedly stepping through it, comparing adjacent elements and swapping them if they're in the wrong order. | O(n²) |
| Caesar Cipher Encryptor | Encrypts a string by shifting each character by a given key value in the alphabet. | O(n) |
| Class Photos | Arranges students in two rows (blue/red shirts) based on height constraints. | O(n log n) |
| Closest Value in BST | Finds the closest value to a target number in a Binary Search Tree. | O(log n) average, O(n) worst |
| Depth First Search | Implements DFS traversal on an N-ary tree, returning node names in traversal order. | O(v + e) |
| Expression Tree | Binary tree implementation for evaluating mathematical expressions. Supports operations (+, -, *, /). | O(n) |
| Insertion Sort | Builds the final sorted array one item at a time by repeatedly inserting a new element into a sorted portion of the array. | O(n²) |
| Largest Three | Returns the three largest numbers from an array in descending order. | O(n) |
| Middle Node | Finds the middle node of a linked list using both two-pass and fast/slow pointer approaches. | O(n) |
| Minimum Waiting Time | Calculates minimum total waiting time for executing queries in optimal order. | O(n log n) |
| Node Depths | Calculates the sum of depths for all nodes in a binary tree. | O(n) |
| Nth Fibonacci | Calculates the nth Fibonacci number using both recursive and iterative approaches. | O(n) iterative, O(2^n) recursive |
| Optimal Freelancing | Maximizes profit by selecting optimal jobs within deadline constraints. | O(n log n) |
| Palindrome Check | Determines if a given string is a palindrome (reads the same forwards and backwards). | O(n) |
| Product Sum | Calculates the sum of elements in a special array where nested arrays are multiplied by their depth. | O(n) |
| Remove Duplicates | Removes duplicate values from a sorted linked list in-place. | O(n) |
| Run Length Encode | Compresses strings by counting consecutive characters (e.g., 'aabcccaa' becomes '2a1b3c2a'). | O(n) |
| Selection Sort | Sorts an array by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning. | O(n²) |
| Sorted Squared Array | Returns a sorted array of squared numbers from a sorted input array. | O(n) |
| Tournament Winner | Determines the winner of a tournament based on competition results. | O(n) |
| Transpose Matrix | Transposes a matrix (converts rows to columns and vice versa). | O(n × m) |
| Two Sum | Finds two numbers in an array that add up to a target sum. Two implementations: brute force O(n²) and optimized hash map O(n). | O(n) |
| Valid Subsequence | Checks if a sequence is a valid subsequence of an array. | O(n) |

## Project Structure

```
.
├── binarySearch/
├── branch-sums/
├── bubble-sort/
├── Caesar-chipher-encryptor/
├── class-photos/
├── closest-value-in-bst/
├── depth-first-search/
├── expression-tree/
├── insertion-sort/
├── largest-three/
├── lib/ # Shared data structures
├── middle-node/
├── minimum-waiting-time/
├── node-depths/
├── nth-fibonacci/
├── optimal-freelancing/
├── palindrome-check/
├── productSum/
├── remove-duplicates-from-linked-list/
├── run-length-encode/
├── selection-sort/
├── sorted-squared-array/
├── tournament-winner/
├── transpose-matrix/
├── two-sum/
└── valid-subsequence/
```

## Getting Started

### Prerequisites
- Node.js
- npm/yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run tests
npm test
```

## Testing

Each algorithm includes comprehensive test cases using Jest. To run all tests:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-algorithm`)
3. Add your algorithm implementation with test cases
4. Commit your changes (`git commit -m 'Add amazing algorithm'`)
5. Push to the branch (`git push origin feature/amazing-algorithm`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

