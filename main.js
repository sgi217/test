let lang="ko"
let dark=false
let current=0
let score=0

const app=document.getElementById("app")

const questions=[
{q:"호감 가는 사람이 있으면 바로 다가가는 편이다.",y:5,n:1},
{q:"내 이상형은 영화나 소설 속에 있다.",y:4,n:1},
{q:"연애는 설레는 감정보다 안정감이 중요하다.",y:1,n:5},
{q:"연애 시작할 때 현실조건 먼저 본다.",y:1,n:5},
{q:"하루종일 함께 있는건 부담스럽다.",y:1,n:5},
{q:"감정기복이 심하다.",y:2,n:3},
{q:"싸우면 누가 잘못했는지 따진다.",y:1,n:4},
{q:"감정상해도 참는다.",y:5,n:2},
{q:"약속 늦으면 기분상한다.",y:1,n:3},
{q:"데이트는 즉흥이 좋다.",y:3,n:3},
{q:"연애 끝 생각 안한다.",y:5,n:1},
{q:"연애사 잘 말한다.",y:4,n:2}
]

function setLang(l){
lang=l
render()
}

function toggleTheme(){
dark=!dark
document.body.classList.toggle("dark")
}

function showHome(){
app.innerHTML=`
<h1>테스트 선택</h1>
<button class="big-btn" onclick="showLove()">연애스킬 테스트</button>

<h2>제휴 문의</h2>
<input placeholder="이메일"
onfocus="this.placeholder=''"
style="padding:15px;width:250px;font-size:18px;">
`
}

function showLove(){
app.innerHTML=`
<h1>연애스킬 테스트</h1>
<button class="big-btn" onclick="startTest()">테스트 시작</button>
`
}

function startTest(){
current=0
score=0
showQuestion()
}

function showQuestion(){
if(current>=questions.length){
showResult()
return
}

let q=questions[current]

app.innerHTML=`
<div class="question">${q.q}</div>
<button class="answer-btn" onclick="answer(true)">YES</button>
<button class="answer-btn" onclick="answer(false)">NO</button>
`
}

function answer(yes){
let q=questions[current]
score+= yes ? q.y : q.n
current++
showQuestion()
}

function showResult(){
let percent=Math.min(100,Math.floor(score/60*100))
app.innerHTML=`
<h2>연애 점수 ${score}</h2>
<div class="bar" style="width:${percent}%"></div>

<div id="disqus_thread"></div>
`
loadDisqus()
}

function loadDisqus(){
var d=document,s=d.createElement('script');
s.src='https://sgi217-2.disqus.com/embed.js';
s.setAttribute('data-timestamp',+new Date());
(d.head||d.body).appendChild(s);
}

showHome()
