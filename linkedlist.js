import Node from './node.js'
export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append = (value) => {
        if(this.head === null){
            this.head = new Node(this.tail, value);
            this.tail = this.head;
        } else{
            let newNode = new Node(null, value);
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    prepend = (value) => {
        if(this.head === null){
            this.head = new Node(this.tail, value);
            this.tail = this.head;
        } else{
            let newNode = new Node(this.head, value);
            this.head = newNode;
        }
        this.length += 1;
    }

    size = () => {
        return this.length;
    }

    getHead = () =>{
        return this.head;
    }
    
    getTail = () => {
        return this.tail;
    }

    at = (index) => {
        if (index < 0 || typeof index !== "number") return null;
        let currentNode = this.getHead();
        let currentCount = 0;
        return this.atHelper(currentNode, index, currentCount);
    }

    atHelper = (currentNode, index, currentCount) => {        
        if (currentNode === null) return null;
        if (currentCount === index) return currentNode;
        return this.atHelper(currentNode.nextNode, index, currentCount + 1)
    }

    pop = () => {
        if(!this.head) return null;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        this.tail = this.at(this.size() - 2);
        this.tail.nextNode = null;
        this.length--;
    }

    contains = (value) => this.containsHelper(this.head, value);

    containsHelper = (currentNode, value) => {
        if (currentNode === null) return false;
        else if (currentNode.value === value) return true;
        else return this.containsHelper(currentNode.nextNode, value);
    }

    find = (value) => this.findIndex(value, this.head, 0)

    findIndex = (value, currentNode, count) => {
        if(currentNode === null) return null;

        if(currentNode.value === value) return count;
        else return this.findIndex(value, currentNode.nextNode, count + 1);
    }

    toString = () => {
        let outputString = ""
        for(let i = 0; i < this.size(); i++)
        {
            outputString += `(${this.at(i).value}) -> `;
        }
        outputString += `null`;
        return outputString;
    }

    insertAt = (value, index) => {

        if (index === 0) this.prepend(value);
        else if (index === this.length) this.append(value);
        else{
            const prevNode = this.at(index - 1);
            const nextNode = this.at(index);

            if (!prevNode) return null;

            let newNode = new Node(nextNode, value);
            prevNode.nextNode = newNode;

            this.length++;
        }
    }

    removeAt = (index) => {
        if (index < 0 || index >= this.length) return null;

        if(index === this.length - 1) {
            this.pop();
            return;
        }
        
        if (index === 0){
            this.head = this.head.nextNode;
            this.length--;
            return;
        } 
        
        const prevNode = this.at(index - 1);
        const temp = this.at(index);
        prevNode.nextNode = temp.nextNode;
        this.length--;
    }
}