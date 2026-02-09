const navLinks=document.querySelectorAll('.nav-link');
const pages=document.querySelectorAll('.page-content');

function showPage(id){
pages.forEach(p=>p.hidden=true);
document.getElementById(id).hidden=false;

navLinks.forEach(l=>l.classList.remove('active'));
document.querySelector(`[data-page="${id}"]`).classList.add('active');
}

navLinks.forEach(link=>{
link.addEventListener('click',()=>{
showPage(link.dataset.page);
});
});

const themeToggle=document.getElementById('checkbox');

function applyTheme(theme){
if(theme==="dark"){
document.body.classList.add('dark-mode');
themeToggle.checked=true;
}else{
document.body.classList.remove('dark-mode');
themeToggle.checked=false;
}
}

themeToggle.addEventListener('change',()=>{
const t=themeToggle.checked?"dark":"light";
localStorage.setItem('theme',t);
applyTheme(t);
});

const savedTheme=localStorage.getItem('theme')||"light";
applyTheme(savedTheme);

document.getElementById('get-fortune-btn').onclick=()=>{
const list=[
"행운의 날",
"쉬어가는 날",
"돈 나갈 예정",
"좋은 일 생김"
];
document.getElementById('fortune-result').textContent=
list[Math.floor(Math.random()*list.length)];
};
