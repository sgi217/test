const pages=document.querySelectorAll(".page-content");
const navLinks=document.querySelectorAll(".nav-link");

function showPage(id){
pages.forEach(p=>p.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
loadDisqus(id);
}

navLinks.forEach(link=>{
link.onclick=()=>{
showPage(link.dataset.page);
};
});

function loadDisqus(page){
const id="disqus_"+page.replace("-page","");
const target=document.getElementById(id);
if(!target)return;

target.innerHTML="";

var d=document,s=d.createElement('script');
s.src='https://sgi217-2.disqus.com/embed.js';
s.setAttribute('data-timestamp',+new Date());
(d.head||d.body).appendChild(s);
}

document.getElementById("checkbox").onchange=(e)=>{
if(e.target.checked){
document.body.classList.add("dark-mode");
}else{
document.body.classList.remove("dark-mode");
}
};

document.getElementById("language-select").onchange=(e)=>{
if(e.target.value==="en"){
alert("영어 번역 데이터 추가하면 활성화됨");
}
};

document.getElementById("fortuneBtn").onclick=()=>{
const list=[
"행운의 날",
"조심해야 하는 날",
"돈 들어오는 날",
"휴식이 필요한 날"
];
document.getElementById("fortuneText").textContent=
list[Math.floor(Math.random()*list.length)];
};

showPage("home-page");
