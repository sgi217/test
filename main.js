const tests={
mbti:{
questions:[
{q:"친구 만나면?",a:[{t:"신난다",s:2},{t:"피곤",s:1}]},
{q:"혼자있기?",a:[{t:"좋다",s:1},{t:"싫다",s:2}]}
],
results:[
{min:0,title:"I형"},
{min:3,title:"E형"}
]
}
};

let score=0;
let step=0;
let currentTest=null;

function startTest(name){
currentTest=tests[name];
score=0;
step=0;
renderQuestion(name);
}

function renderQuestion(name){
const area=document.getElementById("test-area-"+name);
const q=currentTest.questions[step];

area.innerHTML=`<h3>${q.q}</h3>`+
q.a.map(a=>`<button onclick="answer('${name}',${a.s})">${a.t}</button>`).join("");
}

function answer(name,s){
score+=s;
step++;
if(step>=currentTest.questions.length){
showResult(name);
}else{
renderQuestion(name);
}
}

function showResult(name){
const area=document.getElementById("test-area-"+name);
let result=currentTest.results[0];
currentTest.results.forEach(r=>{
if(score>=r.min) result=r;
});
area.innerHTML=`<h2>${result.title}</h2>`;
}

function generateFortune(){
const list=["대박","평범","좋음","주의"];
document.getElementById("fortune-result").innerText=
list[Math.floor(Math.random()*list.length)];
}

// Disqus
var disqus_config=function(){
this.page.url=window.location.href;
this.page.identifier=window.location.hash;
};

(function(){
var d=document,s=d.createElement('script');
s.src='https://sgi217-2.disqus.com/embed.js';
s.setAttribute('data-timestamp',+new Date());
(d.head||d.body).appendChild(s);
})();
