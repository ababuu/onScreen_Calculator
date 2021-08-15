const btn1=document.querySelector('.one').addEventListener('click', response);
const btn2=document.querySelector('.two').addEventListener('click', response);
const btn3=document.querySelector('.three').addEventListener('click', response);
const btn4=document.querySelector('.four').addEventListener('click', response);
const btn5=document.querySelector('.five').addEventListener('click', response);
const btn6=document.querySelector('.six').addEventListener('click', response);
const btn7=document.querySelector('.seven').addEventListener('click', response);
const btn8=document.querySelector('.eight').addEventListener('click', response);
const btn9=document.querySelector('.nine').addEventListener('click', response);
const btnPlus=document.querySelector('.add').addEventListener('click', response);
const btnSub=document.querySelector('.sub').addEventListener('click', response);
const btnMul=document.querySelector('.mul').addEventListener('click', response);
const btnDiv=document.querySelector('.divide').addEventListener('click', response);
const btnZero=document.querySelector('.zero').addEventListener('click', response);
const btnPoint=document.querySelector('.point').addEventListener('click', response);
const btnAc=document.querySelector('.ac').addEventListener('click', clear);
const btnDel=document.querySelector('.del').addEventListener('click', del);
const btnEqual=document.querySelector('.equal').addEventListener('click', equalTo);
const inputContainer=document.querySelector('.input-container');

const inputNum=document.querySelector('.input-num');

let count=0;
let turn=0;
let a='';
let b='';
let op='';
let opLimit=0;

if(inputContainer.textContent !=null){
    inputContainer.textContent='';
}

function response(e){
    if(count>18) return;
    
    let text=e.target.textContent;
    const input=document.createElement('h3');
    input.className=`input-num`;
    input.textContent=`${text}`;
    inputContainer.appendChild(input);
    
    
    if(/\d/.test(text) && turn==0){
        a+=text;
        console.log(`a= ${a}`);
    }

    else if(!/\d/.test(text) && opLimit==0){
        op=text;
        turn=1;
        opLimit++;
        inputContainer.textContent='';
        console.log(op);
    }
    else if(!/\d/.test(text) && opLimit!=0){
        alert("One operation at a time!");
        del();
    }
    else if(/\d/.test(text) && turn==1){
        b+=text;
        console.log(`b= ${b}`);
    }
    count++;
}

function del(){
    if(!/\d/.test(inputContainer.lastChild.textContent)){
        inputContainer.removeChild(inputContainer.lastChild);
        count--;
        
    }
    inputContainer.removeChild(inputContainer.lastChild);
    count--;

}

function clear(){
    inputContainer.textContent='';
    opLimit=0;
    count=0;
    turn=0;
    a='';
    b='';
    op='';
}

function equalTo(){
    inputContainer.textContent='';
    operate(Number(a),Number(b),op);
}



function operate(a,b,operation){

    const result=document.createElement('h3');
    result.className=`result`;
    inputContainer.appendChild(result);

    if(operation== "+" ){
        result.textContent=add(a,b);
    }
    else if(operation=='-'){
        result.textContent=subtract(a,b);
    }
    else if(operation=='*'){
        result.textContent=multiply(a,b);
    }
    else if(operation=='/'){
        result.textContent=divide(a,b);
    }

}


function add(a,b){
    return Math.round((a+b)*100)/100;

}

function subtract(a,b){
    return Math.round((a-b)*100)/100;

}

function multiply(a,b){
    return Math.round((a*b)*100)/100;

}

function divide(a,b){
    return Math.round((a/b)*100)/100;

}

