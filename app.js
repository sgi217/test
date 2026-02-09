let tests=[]
let currentTest=null
let idx=0
let score=0

const app=document.getElementById("app")

/* ---------- 다크모드 ---------- */
document.getElementById("themeToggle")
.addEventListener("change",()=>{
document.body.classList.toggle("dark")
})

/* ---------- 테스트 로드 ---------- */
async function loadTests(){
const res=await fetch("tests.json")
tests=await res.json()
showHome()
}

/* ---------- 홈 ---------- */
function showHome(){
app.innerHTML=`
<h1>테스트 플랫폼</h1>
<button class="big" onclick="showTests()">테스트 선택</button>
`
}

/* ---------- 테스트목록 ---------- */
function showTests(){
let html="<h2>연애테스트 목록</h2>"
tests.forEach((t,i)=>{
html+=`<button class="big" onclick="startTest(${i})">${t.name}</button><br>`
})
app.innerHTML=html
}

/* ---------- 테스트 시작 ---------- */
function startTest(i){
currentTest=tests[i]
idx=0
score=0
renderQuestion()
}

/* ---------- 질문 ---------- */
function renderQuestion(){
if(idx>=currentTest.questions.length){
finishTest()
return
}

let q=currentTest.questions[idx]

app.innerHTML=`
<h3>${idx+1}/${currentTest.questions.length}</h3>
<h2>${q.q}</h2>

<button class="big" onclick="answer(${q.yes})">YES</button>
<button class="big" onclick="answer(${q.no})">NO</button>
`
}

function answer(s){
score+=s
idx++
renderQuestion()
}

/* ---------- 결과 ---------- */
function finishTest(){
let percent=Math.min(100,Math.round(score))

app.innerHTML=`
<h2>연애력 점수</h2>

<div class="gauge">
<div class="bar" style="width:${percent}%">
${percent}%
</div>
</div>

<button class="big" onclick="showHome()">홈</button>
`
}

loadTests()
