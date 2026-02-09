const pages=document.querySelectorAll(".page")

function showPage(id){
pages.forEach(p=>p.classList.remove("active"))
document.getElementById(id).classList.add("active")
}

const themeToggle=document.getElementById("themeToggle")

themeToggle.addEventListener("change",()=>{
document.body.classList.toggle("dark")
})

/* ---------- 테스트 데이터 ---------- */

let tests={
loveSkill:{
questions:[
"호감 가는 사람이 있으면 바로 다가간다",
"이상형은 영화속에 있다",
"연애는 안정감이 중요하다",
"연애 현실조건 본다",
"하루종일 함께있으면 부담",
"감정기복 심하다",
"싸우면 잘잘못 먼저",
"상처 받아도 참는다",
"약속 늦으면 화난다",
"데이트 즉흥 좋다",
"순간을 즐긴다",
"연애사 잘 말한다"
]
}
}

/* ---------- 테스트 실행 ---------- */

let step=0
let score=0

function startLoveTest(){
step=0
score=0
renderQuestion()
}

function renderQuestion(){
const q=tests.loveSkill.questions[step]

document.getElementById("progress").innerText=`${step+1}/12`
document.getElementById("questionBox").innerText=q

const ans=document.getElementById("answers")
ans.innerHTML=""

;["YES","NO"].forEach(v=>{
const b=document.createElement("button")
b.innerText=v
b.onclick=()=>{
score+=v==="YES"?8:3
step++
if(step>=12)finishTest()
else renderQuestion()
}
ans.appendChild(b)
})
}

function finishTest(){
const percent=Math.min(100,score)
document.getElementById("gauge").style.width=percent+"%"
}

/* ---------- 테스트 목록 자동 ---------- */

function renderTestList(){
const list=document.getElementById("testList")
list.innerHTML=""

const btn=document.createElement("button")
btn.innerText="연애스킬 테스트 시작"
btn.onclick=()=>{
showPage("love-skill-page")
startLoveTest()
}
list.appendChild(btn)
}

renderTestList()

/* ---------- 관리자 JSON 추가 ---------- */

function addTest(){
const json=document.getElementById("jsonInput").value
try{
const obj=JSON.parse(json)
tests[obj.name]=obj
alert("추가됨")
}catch{
alert("JSON 오류")
}
}
