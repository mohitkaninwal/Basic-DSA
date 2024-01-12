/////////////////////////    Insert
let data = [1, 2, 3, 5, 6, 7];
let pos= 3;
let el = 4;


for (let i = data.length - 1; i >= 0; i--) {
  if (i >= pos) {
    data[i + 1] = data[i];
    if (i === pos) {
      data[i] = el;
    }
  }
}
console.log(data);

// The same can be done by using splice method



//////////////////////////  Delete
for(let i=pos;i<=data.length-1;i++){
  data[i]=data[i+1];
}
data.length--;
console.log(data);



/////////////////////////  Searching
let element2=6;
for(let i=0;i<=data.length-1;i++){
  if(data[i]==element2)
console.log(i);
}
// indexOf method can be used for same