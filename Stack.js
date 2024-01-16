// stack
let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    alert("Stack is full you cannot add" + newVal);
  }
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop(){
    if(currentSize>0){
        currentSize -=1;
        data.length =currentSize;
 }
 else{
    alert('stack is already empty')
}
}

push(3);
push(4);
push(5);
pop(5)
console.log(data);
