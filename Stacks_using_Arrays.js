class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stack{
  constructor(){
    this.array=[];
  }
  peek(){
return this.array[this.array.length-1];
  }
  push(value){
    this.array.push(value);

 }

  pop(){
  this.array.pop()
    return this;
  }
}
//isEmpty

const myStack=new Stack();
myStack.peek()
myStack.push('google');
myStack.push('udemy');
myStack.push('Discord');
myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()
