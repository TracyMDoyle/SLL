class SLLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addFront(value) {
        // Creating a new node object with a value to be passed to the front 
        let new_node = new SLLNode(value); 
        new_node.next = this.head
            this.head = new_node;
            return this;
        }

    removeFront(){
        if(this.head == null){
            return this.head;
        }
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }  
    
    front(){
        if(this.head == null){
            return null;
        } else {
        return this.head.value; 
        }
    }
    display(){
        let linkedList = "";
        if(this.head == null){
            return "this is an empty list"
        }
        linkedList += this.head.value;
        let runner = this.head.next;
        while(runner != null){
            linkedList += "," + runner.value;
            runner = runner.next
        }
        return linkedList
    }

}

let sll1 = new SLL();
sll1.addFront(18).addFront(5).addFront(73);
console.log(`this is my head`, sll1.front());
console.log(sll1);

sll1.removeFront();
console.log(`removed list`, sll1)
console.log(`this is my head`, sll1.front());
console.log(`this is the display of my list:`, sll1.display());