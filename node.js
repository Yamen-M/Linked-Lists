export default class Node{
    
    nextNode = null;
    value = null;
    constructor(nextNode, value){
        this.value = value;
        this.nextNode = nextNode;
    }
}