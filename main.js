const langData={
ko:{pageTitle:"각종 테스트"},
en:{pageTitle:"Various Tests"}
};

const questions=[
"호감 가는 사람이 있으면 바로 다가가는 편이다.",
"내 이상형은 영화나 소설 속에 있다.",
"나에게 있어 연애는 안정감이 더 중요하다",
"연애 시작 시 현실 조건을 먼저 본다",
"하루 종일 함께 있는 건 부담스럽다",
"나는 감정 기복이 심하다",
"싸우면 누가 잘못했는지 따진다",
"감정 상해도 참는다",
"늦으면 기분 상한다",
"데이트는 즉흥이 좋다",
"끝 생각 안하고 즐긴다",
"연애사 잘 털어놓는다"
];

const yesScore=[5,4,1,1,1,2,1,5,1,3,5,4];
const noScore=[1,1,5,5,5,3,4,2,3,3,1,2];

let step=0,score=0;

document.querySelectorAll(".nav-link").forEach(a=>{
a.onclick=e=>{
const id=a.dataset.page;
document.querySelectorAll(".page-content").forEach(p=>p.hidden=true);
document.getElementById(id).hidden=false;
};
});

document.getElementById("checkbox").onchange=()=>{
document.body.classList.toggle("dark-mode");
};

document.getElementById("language-select").onchange=e=>{
const lang=e.target.value;
document.querySelectorAll("[data-lang]").forEach(el=>{
const k=el.dataset.lang;
el.textContent=langData[lang][k];
});
};

document.getElementById("start-love").onclick=()=>{
step=0;score=0;
document.getElementById("question-area").hidden=false;
showQ();
};

function showQ(){
document.getElementById("question").textContent=questions[step];
}

yesBtn.onclick=()=>{
score+=yesScore[step];
next();
};

noBtn.onclick=()=>{
score+=noScore[step];
next();
};

function next(){
step++;
if(step>=questions.length){
result();
}else showQ();
}

function result(){
document.getElementById("question-area").hidden=true;
document.getElementById("result-area").hidden=false;
result-title.textContent="미친 플러팅 머신";
result-desc.textContent="연애 고수 타입";
}
