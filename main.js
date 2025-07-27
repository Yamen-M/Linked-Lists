import LinkedList from './linkedlist.js'

const list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(2);
console.log(list.head);  // Should show node with value 2
console.log(list.tail);  // Should show node with value 10

console.log(list.head.value);        // 2
console.log(list.head.nextNode.value); // 5
console.log(list.tail.value);       // 10
console.log(list.tail.nextNode);    // null
console.log(list.getTail()); // 2
console.log(list.size()) //3
list.pop()
console.log(list.tail.value);       // 5 noice!
console.log(list.toString());
list.append(10);
console.log(list.toString());




