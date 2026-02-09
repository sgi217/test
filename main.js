document.addEventListener("DOMContentLoaded",()=>{

const pages=document.querySelectorAll(".page");

function showPage(id){
pages.forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

document.querySelectorAll(".menu-btn").forEach(btn=>{
btn.onclick=()=>showPage(btn.dataset.page);
});

document.getElementById("loveSkillBtn").onclick=()=>{
showPage("loveSkill");
startTest();
};

const themeToggle=document.getElementById("theme-toggle");

themeToggle.onchange=()=>{
document.body.classList.toggle("dark");
};

const questions=[
"호감 가는 사람이 있으면 바로 다가가는 편이다.",
"내 이상형은 영화나 소설 속에 있다.",
"연애는 안정감이 더 중요하다.",
"연애 시작 시 현실 조건을 본다.",
"하루종일 함께 있으면 부담된다.",
"감정 기복이 심하다.",
"싸우면 누가 잘못했는지 따진다.",
"감정 상해도 표현 안한다.",
"상대 늦으면 기분 상한다.",
"데이트는 즉흥이다.",
"연애 끝 생각 안한다.",
"연애사 잘 말한다."
];

let index=0;
let score=0;

const qBox=document.getElementById("questionBox");
const progress=document.getElementById("progress");
const gauge=document.getElementById("gaugeFill");

function startTest(){
index=0;
score=0;
render();
}

function render(){
qBox.innerText=questions[index];
progress.innerText=`${index+1}/12`;
}

function answer(val){
score+=val;
index++;

if(index>=questions.length){
finish();
}else{
render();
}
}

document.getElementById("yesBtn").onclick=()=>answer(10);
document.getElementById("noBtn").onclick=()=>answer(5);

function finish(){
let percent=Math.min(100,score);
gauge.style.width=percent+"%";
}

});
