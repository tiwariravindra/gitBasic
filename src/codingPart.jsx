const arr = [1,2,2,3,4,4,5,2];

const freq = {};

for(let i=0;  i < arr.length; i++){
    if(freq.hasOwnProperty(arr[i])){
        freq[arr[i]] = freq[arr[i]] + 1;
    }else{
        freq[arr[i]] = 1;
    }
}
/*
const result = Object.keys(freq).filter((v)=> {if(freq[v] > 1){ 
        {v : freq[v]};
    }
});
*/
const result = Object.keys(freq).reduce((acc, v) => {
   
  if (freq[v] > 1) {
    acc[v] = freq[v];
  }
 return acc;
}, {});

console.log(freq); //{ '1': 1, '2': 3, '3': 1, '4': 2, '5': 1 }
console.log(result); //{ '2': 3, '4': 2 }