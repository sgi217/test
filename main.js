document.addEventListener("DOMContentLoaded",()=>{

const pages=document.querySelectorAll(".page");
document.querySelectorAll(".menu-btn").forEach(btn=>{
btn.onclick=()=>{
pages.forEach(p=>p.classList.remove("active"));
document.getElementById(btn.dataset.page).classList.add("active");
};
});

const themeToggle=document.getElementById("themeToggle");
themeToggle.onchange=()=>{
document.body.classList.toggle("dark");
};

const questions=[
"호감 가는 사람이 있으면 바로 다가가는 편이다.",
"내 이상형은 영화나 소설 속에 있다.",
"연애는 설렘보다 안정감이 중요하다.",
"연애 시작할 때 현실 조건을 먼저 본다.",
"하루종일 함께 있는 건 부담스럽다.",
"나는 감정기복이 심하다.",
"싸우면 누가 잘못했는지 따진다.",
"감정 상해도 참는다.",
"약속 늦으면 기분 상한다.",
"데이트는 즉흥이 좋다.",
"연애 끝 생각 안하고 즐긴다.",
"연애사 잘 말한다."
];

const yesScore=[10,8,2,2,2,6,2,3,2,8,10,9];
const noScore=[2,2,9,9,9,4,8,7,7,8,2,3];

let step=0;
let score=0;

document.getElementById("startTest").onclick=()=>{
document.getElementById("startArea").hidden=true;
document.getElementById("testArea").hidden=false;
render();
};

function render(){
document.getElementById("progress").innerText=`${step+1}/12`;
document.getElementById("question").innerText=questions[step];
}

document.getElementById("yesBtn").onclick=()=>{
score+=yesScore[step];
next();
};

document.getElementById("noBtn").onclick=()=>{
score+=noScore[step];
next();
};

function next(){
step++;
if(step>=12){
showResult();
}else{
render();
}
}

function showResult(){
document.getElementById("testArea").hidden=true;
document.getElementById("resultArea").hidden=false;

let percent=Math.min(100,score);

document.getElementById("gauge").style.width=percent+"%";
document.getElementById("scoreText").innerText=percent+"점 / 100점";
}

});
