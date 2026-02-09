let tests=[];
let currentTest=null;
let step=0;
let score=0;

async function loadTests(){
const res=await fetch("tests.json");
tests=await res.json();

const list=document.getElementById("testList");
list.innerHTML="";

tests.forEach(t=>{
const btn=document.createElement("button");
btn.textContent=t.name;
btn.onclick=()=>startTest(t.id);
list.appendChild(btn);
});
}

function showHome(){
document.getElementById("testArea").hidden=true;
}

function startTest(id){
currentTest=tests.find(t=>t.id===id);
step=0;
score=0;
document.getElementById("testArea").hidden=false;
renderQuestion();
}

function renderQuestion(){
const q=currentTest.questions[step];

document.getElementById("progress").innerText=
(step+1)+"/"+currentTest.questions.length;

document.getElementById("question").innerText=q.q;

const ans=document.getElementById("answers");
ans.innerHTML="";

["YES","NO"].forEach(type=>{
const b=document.createElement("button");
b.innerText=type;
b.onclick=()=>{
score+=q[type.toLowerCase()];
step++;
if(step>=currentTest.questions.length) showResult();
else renderQuestion();
};
ans.appendChild(b);
});
}

function showResult(){
const percent=Math.min(100,score);
document.getElementById("question").innerText=
"연애력 점수 "+percent+"점";

document.getElementById("answers").innerHTML="";

document.getElementById("gauge").innerHTML=
`<div style="
height:30px;
background:linear-gradient(90deg,#ffd6e7,red);
width:${percent}%;
"></div>`;
}

loadTests();
