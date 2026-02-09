let lang="ko";
let dark=false;

function setLang(l){
lang=l;
renderHome();
}

function toggleTheme(){
dark=!dark;
document.body.classList.toggle("dark");
}

function goHome(){
renderHome();
}

const loveTest=[
{q:"호감 가는 사람이 있으면 바로 다가가는 편이다.",yes:5,no:1},
{q:"내 이상형은 영화나 소설 속에 있다.",yes:4,no:1},
{q:"연애는 설렘보다 안정감이 중요하다.",yes:1,no:5},
{q:"연애 시작할 때 현실조건 먼저 본다.",yes:1,no:5},
{q:"하루종일 함께 있으면 부담스럽다.",yes:1,no:5},
{q:"감정기복 심하다.",yes:2,no:3},
{q:"싸우면 누가 잘못했는지 따진다.",yes:1,no:4},
{q:"상처 받아도 참는다.",yes:5,no:2},
{q:"늦으면 기분 상한다.",yes:1,no:3},
{q:"데이트 즉흥 좋다.",yes:3,no:3},
{q:"끝 생각 안하고 즐긴다.",yes:5,no:1},
{q:"연애사 잘 털어놓는다.",yes:4,no:2}
];

let idx=0;
let score=0;

function openLove(){
document.getElementById("app").innerHTML=`
<h2>연애스킬 테스트</h2>
<button onclick="startLove()">테스트 시작</button>
`;
}

function startLove(){
idx=0;
score=0;
nextQ();
}

function nextQ(){
if(idx>=loveTest.length){
showResult();
return;
}

let q=loveTest[idx];

document.getElementById("app").innerHTML=`
<div class="big-question">${idx+1}. ${q.q}</div>
<button class="answer-btn" onclick="answer(true)">YES</button>
<button class="answer-btn" onclick="answer(false)">NO</button>
`;
}

function answer(y){
let q=loveTest[idx];
score+= y?q.yes:q.no;
idx++;
nextQ();
}

function showResult(){
document.getElementById("app").innerHTML=`
<h2>결과</h2>
<p>점수:${score}</p>
<p>미친 플러팅 머신 😎</p>
<p>나는 연애할 때 냅다 플러팅하는 타입!</p>
`;
}

function renderHome(){
document.getElementById("app").innerHTML=`
<h1>심리테스트 플랫폼</h1>

<div>
<h3>연애스킬 테스트</h3>
<button onclick="openLove()">테스트 하기</button>
</div>

<div class="center-box">
<h3>제휴문의</h3>
<input placeholder="이메일">
<input placeholder="내용">
</div>
`;
}

renderHome();
