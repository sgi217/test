const API="http://localhost:3000"

let user=null
let token=null
let score=0
let step=0

const app=document.getElementById("app")
const idInput=document.getElementById("id")
const pwInput=document.getElementById("pw")
const logoutBtn=document.getElementById("logoutBtn")

const questions=[
"호감 가면 바로 다가간다",
"이상형은 영화속",
"연애는 안정감 중요",
"현실조건 본다",
"하루종일 연락 부담",
"감정기복 심함",
"싸우면 잘잘못 따짐",
"감정참는 스타일",
"늦으면 화남",
"데이트 즉흥적",
"순간 즐김",
"연애사 공유함"
]

function register(){
fetch(API+"/register",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
username:idInput.value,
password:pwInput.value
})
}).then(()=>alert("가입완료"))
}

function login(){
fetch(API+"/login",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
username:idInput.value,
password:pwInput.value
})
})
.then(r=>r.json())
.then(d=>{
if(d.token){
user=d.username
token=d.token
logoutBtn.hidden=false
logoutBtn.innerText=`로그아웃(${user})`
alert("로그인 성공")
}
})
}

function logout(){
user=null
token=null
logoutBtn.hidden=true
alert("로그아웃")
}

function showHome(){
app.innerHTML=`<h1>홈</h1>`
}

function startTest(){
step=0
score=0
render()
}

function render(){

if(step>=questions.length){

let percent=Math.round(score/120*100)

fetch(API+"/result",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
username:user||"guest",
score:percent
})
})

app.innerHTML=`
<h2>${percent}%</h2>
<div class="bar">
<div class="fill" style="width:${percent}%"></div>
</div>
<button onclick="loadRank()">랭킹보기</button>
`
return
}

app.innerHTML=`
<h3>${step+1}/12</h3>
<h2>${questions[step]}</h2>
<button onclick="ans(10)">YES</button>
<button onclick="ans(0)">NO</button>
`
}

function ans(s){
score+=s
step++
render()
}

function loadRank(){
fetch(API+"/ranking")
.then(r=>r.json())
.then(d=>{
app.innerHTML+=d.map(x=>`<div>${x.username} ${x.score}%</div>`).join("")
})
}
