// let titleDiv=document.getElementById('title')
// console.log(titleDiv);


// console.log('before:',titleDiv.innerText)

// let msg='Good';


// titleDiv.innerText=msg;


// console.log('after:',titleDiv.innerText)

// titleDiv.innerHTML=`<p>Hello ${msg}</p>`;
// titleDiv.style.backgroundColor='red';


// let redDiv=document.getElementById("red");
// let yellowDiv=document.getElementById("yellow");
// let greenDiv=document.getElementById("green");

// redDiv.onclick=()=>console.log('you clicked red');
// yellowDiv.onclick=()=>console.log('you clicked yellow');
// greenDiv.onclick=()=>console.log('you clicked green');

const squares=document.querySelectorAll('.colorSquare');
// console.log(squares);

// console.log(squares[0].value);


// forEach

// squares.forEach(square=>console.log(square.value));
const timesClicked={'red':0,'yellow':0,'green':0}

squares.forEach(square=>{
    square.onclick=()=>{
       // console.log(timesClicked[square.value])
        timesClicked[square.value]+=1;
        square.innerText=timesClicked[square.value]
    }
})

function clearScores(){
    timesClicked.red=0;
    timesClicked.yellow=0;
    timesClicked.green=0;
    squares.forEach(square=>square.innerText=0)
}
const clearGameDiv=document.getElementById("clear-game");
clearGameDiv.onclick=()=>clearScores()



