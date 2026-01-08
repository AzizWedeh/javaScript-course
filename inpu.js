let x
const age=document.getElementById("age")

const btn1=document.getElementById("btn1")

const result=document.getElementById("result")
const btn2 = document.getElementById("btn-reset")
btn1 .onclick=function(){
x= age.value;
x= Number(x)
    if(x>=18 && x<=70)
{
    result.textContent="to welcome"
}
if(x<18 && x>=1){
result.textContent="you are too younge"
}

if(x>70){
    result.textContent="you are tooo old my uncle"

}

if(x<0){
    result.textContent="you are not born yet"
}
    }
btn2.onclick=function(){
    age.value="0"
    result.textContent="0"
}  