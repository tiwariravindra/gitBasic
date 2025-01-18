
// question
function a(){
    b = 10;
    let m = 20;
}

a();


//console.log(b);
//b = 10;
//console.log(m);

// question 
var arr = [1,2,3,4,5];
var brr = [2,3,4];

var r = [3,5,7,4,5]; // result
var result = [];
var length = brr.length ;
if(arr.length > brr.length ){
    length = arr.length ;
}
for(let i=0; i < length; i++){
    if(arr[i] && brr[i]){
        result.push(arr[i] + brr[i]);
    }else if(arr[i] && !brr[i]){
        result.push(arr[i]);
    }else{
        result.push(brr[i]);
    }
    
}
// another approach
const re = brr.map((val, i)=>  val + (arr[i] || 0));
console.log(re);
console.log(result);

// question
delete r[2];
console.log('r array length:', r.length);

// question
r.length = 0;
console.log(r[0]);

// question
for(let k=0; k < 3; k++){
    const log = () => {
        console.log(k);
    }
    
    //setTimeout(log,100);
}

// question
console.log('1');
setTimeout(()=>{ console.log('2') },0);
Promise.resolve().then(()=> { console.log('3') });
console.log('4');

// question

function abc(){
    if(20){
       var j = 1;
       let t = 2;
       const y = 3;
    }
    console.log('j', j);
    //console.log('t', t);
    //console.log('y', y);
}
abc();

//question

const obj = {first: 1, second : 2, third:new Date(), four : 'abc'};
// find the key is second and value is 2

for(let val in obj){
    
    if(val == 'second' && obj[val] === 2){
        console.log('val', val);
        console.log('val', obj[val]);
    }
}
/*
const objRe = obj.map((val)=> {
    if(val.second === 2){
        return 'true';
    }
});
console.log('objRe', objRe);
*/


let globalVar = 'Global';

function outerFunction() {
  let outerVar = 'Outer';

  function innerFunction() {
    let innerVar = 'Inner';
    console.log(innerVar); // 'Inner'
    console.log(outerVar); // 'Outer'
    console.log(globalVar); // 'Global'
  }

  innerFunction();
}

outerFunction();
