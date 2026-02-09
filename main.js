const langData={
ko:{title:"각종 테스트"},
en:{title:"Test Platform"}
};

const loveQuestions=[
["호감 가는 사람이 있으면 바로 다가가는 편이다.",5,1],
["내 이상형은 영화나 소설 속에 있다.",4,1],
["연애는 안정감이 더 중요하다.",1,5],
["현실적인 조건 먼저 본다.",1,5],
["하루종일 함께는 부담.",1,5],
["감정 기복 심함.",2,3],
["싸우면 잘잘못 먼저.",1,4],
["표현보다 참는다.",5,2],
["늦으면 기분상함.",1,3],
["데이트 즉흥.",3,3],
["순간 즐김.",5,1],
["연애사 공유함.",4,2]
];

let step=0;
let score=0;

function showPage(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

document.querySelectorAll(".nav-link").forEach(el=>{
el.onclick=()=>showPage(el.dataset.page);
});

function renderQuestion(){
if(step>=loveQuestions.length){
showResult();
return;
}
const q=loveQuestions[step];
document.getElementById("question-box").innerText=q[0];
const ans=document.getElementById("answers");
ans.innerHTML="";

["YES","NO"].forEach((t,i)=>{
const b=document.createElement("button");
b.innerText=t;
b.onclick=()=>{
score+= i===0?q[1]:q[2];
step++;
renderQuestion();
};
ans.appendChild(b);
});
}

function showResult(){
document.getElementById("result").hidden=false;
document.getElementById("result-title").innerText="사랑꾼 게이지";
const percent=(score/60)*100;
document.getElementById("gauge-bar").style.width=percent+"%";
}

document.getElementById("start-test").onclick=()=>{
step=0;
score=0;
document.getElementById("result").hidden=true;
renderQuestion();
};

const langSelect=document.getElementById("language-select");
langSelect.onchange=()=>{
const lang=langSelect.value;
document.documentElement.lang=lang;
document.querySelectorAll("[data-lang]").forEach(el=>{
const k=el.dataset.lang;
if(langData[lang][k]) el.innerText=langData[lang][k];
});
};

const toggle=document.getElementById("checkbox");
toggle.onchange=()=>{
document.body.classList.toggle("dark-mode");
};
