let questions=[
"호감 가는 사람이 있으면 바로 다가간다",
"내 이상형은 영화 속에 있다",
"연애는 안정감이 중요하다",
"현실 조건 먼저 본다",
"하루종일 같이 있는건 부담",
"감정기복 심하다",
"누가 잘못했는지 따진다",
"참는 편이다",
"늦으면 기분 상한다",
"데이트는 즉흥",
"순간을 즐긴다",
"연애사 털어놓는다"
];

let scoreYes=[10,8,2,2,2,6,3,8,3,7,10,8];
let scoreNo=[2,2,8,8,8,4,7,3,6,7,2,4];

let step=0;
let score=0;

function showPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function startTest(){
step=0;
score=0;
document.getElementById('startBox').style.display='none';
document.getElementById('quizBox').style.display='block';
render();
}

function render(){
document.getElementById('progress').innerText=(step+1)+"/12";
document.getElementById('question').innerText=questions[step];
}

function answer(yes){
score+= yes?scoreYes[step]:scoreNo[step];
step++;

if(step>=questions.length){
showResult();
}else{
render();
}
}

function showResult(){
document.getElementById('quizBox').style.display='none';
document.getElementById('resultBox').style.display='block';
let percent=Math.min(100,score);
document.getElementById('gaugeFill').style.width=percent+"%";
}

document.getElementById("themeToggle").addEventListener("change",()=>{
document.body.classList.toggle("dark");
});
