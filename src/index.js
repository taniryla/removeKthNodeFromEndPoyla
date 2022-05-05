// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?

// write a function that removes the kth node from the end of the list
// don't mutate the original data structure

// the input head should remain the head of the linked list
// even if the head is the node that supposed to be removed

// // 2. What are the data inputs?

// head of a singly linked list and integer k
// // 3. Can you restate the problem in your own words?

// remove the node that is k positions from the tail null

// // 4. Can the unknown be determined from the data inputs?
// yes

// // 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?

// sufficient

// // 6. How should I label important pieces of data input that are a part of the problem?

// head, k
// // 7. Draw a figure. Introduce suitable notation.

// // Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// // 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?

// yes fast and slow pointers
// // 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// // 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// see notes

// // 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// if kth is the original head

// // 12. Progress to more complex examples. What is your updated plan here to find a solution?
// // 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// // Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// // 14.  Can you see clearly that the step is correct?
// see pseudocode below

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
// 21.   How have other people solved this problem?

// if nodeToBeRemoved = head, change it's value and next point
// don't change it as the head of the linked list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // use two pointers
  let counter = 1;
  let slow = head;
  let fast = head;
  // traverse while counter less than or equal to k
  // fast = fast.next
  // counter++
  while (counter <= k) {
    fast = fast.next;
    counter++;
  }
  //
  // if nodeToBeRemoved = head, change it's value and next point
  // don't change it as the head of the linked list
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
    counter++;
  }
  let nodeToBeRemoved = slow.value;
  nodeToBeRemoved[counter - 1] = nodeToBeRemoved.next;
  // no return needed
}

removeKthNodeFromEnd(
  {
    head: "0",
    nodes: [
      { id: "0", next: "1", value: 0 },
      { id: "1", next: "2", value: 1 },
      { id: "2", next: "3", value: 2 },
      { id: "3", next: "4", value: 3 },
      { id: "4", next: "5", value: 4 },
      { id: "5", next: "6", value: 5 },
      { id: "6", next: "7", value: 6 },
      { id: "7", next: "8", value: 7 },
      { id: "8", next: "9", value: 8 },
      { id: "9", next: null, value: 9 }
    ]
  },
  4
);
