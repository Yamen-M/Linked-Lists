import LinkedList from './linkedlist.mjs'

// example uses class syntax - adjust as necessary
const odinList = new LinkedList();

odinList.append("dog");
odinList.append("cat");
odinList.append("parrot");
odinList.append("hamster");
odinList.append("snake");
odinList.append("turtle");

console.log(odinList.toString());

const list = new LinkedList();

// === Initial State ===
console.log("\nInitial list:", list.toString()); // null

// === Append values ===
list.append(10);
list.append(20);
list.append(30);
console.log("After appending 10, 20, 30:", list.toString()); // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// === Prepend a value ===
list.prepend(5);
console.log("After prepending 5:", list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// === Check size, head, tail ===
console.log("Size:", list.size());                 //  4
console.log("Head:", list.head.value);            //  5
console.log("Tail:", list.tail.value);            //  30

// === at(index) ===
console.log("Value at index 2:", list.at(2).value); //  20

// === contains() ===
console.log("Contains 20:", list.contains(20));    //  true
console.log("Contains 99:", list.contains(99));    //  false

// === find() ===
console.log("Find 10:", list.find(10));            //  1
console.log("Find 99:", list.find(99));            //  null

// === insertAt ===
list.insertAt(15, 2);
console.log("After insertAt(15, 2):", list.toString()); // ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 30 ) -> null

list.insertAt(1, 0);
list.insertAt(35, list.size());
console.log("After insertAt at head and tail:", list.toString()); // ( 1 ) -> ( 5 ) -> ... -> ( 35 ) -> null

// === removeAt ===
list.removeAt(0);
list.removeAt(2);
list.removeAt(list.size() - 1);
console.log("After removeAt(0), removeAt(2), removeAt(tail):", list.toString());

// === pop ===
list.pop();
console.log("After pop:", list.toString());

// === Final stats ===
console.log("Final size:", list.size());
console.log("Final head:", list.head?.value || "null");
console.log("Final tail:", list.tail?.value || "null");





