body{
font-family:sans-serif;
margin:0;
background:#f5f5f5;
text-align:center;
}

.dark{
background:#111;
color:white;
}

header{
background:white;
padding:10px;
box-shadow:0 2px 5px rgba(0,0,0,0.1);
}

.header-inner{
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:auto;
}

.menu-center{
display:flex;
gap:20px;
}

.top-right{
display:flex;
gap:10px;
}

.page{display:none;}
.page.active{display:block;}

.center{
max-width:900px;
margin:auto;
padding:40px;
}

.big-btn{
padding:15px 30px;
font-size:20px;
margin-top:20px;
cursor:pointer;
}

.answer-btn{
padding:20px 40px;
font-size:22px;
margin:20px;
cursor:pointer;
}

.gauge{
width:100%;
height:30px;
background:#ddd;
border-radius:20px;
overflow:hidden;
}

#gaugeBar{
height:100%;
width:0%;
background:linear-gradient(to right,#ffb6c1,#ff0000);
}
