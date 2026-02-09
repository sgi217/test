const express=require("express")
const cors=require("cors")
const jwt=require("jsonwebtoken")
const db=require("./db")

const app=express()
app.use(cors())
app.use(express.json())

const SECRET="testsecret"

app.post("/register",(req,res)=>{
const {username,password}=req.body
db.query(
"INSERT INTO users(username,password) VALUES(?,?)",
[username,password],
()=>res.json({ok:true})
)
})

app.post("/login",(req,res)=>{
const {username,password}=req.body
db.query(
"SELECT * FROM users WHERE username=? AND password=?",
[username,password],
(err,r)=>{
if(r.length>0){
const token=jwt.sign({username},SECRET)
res.json({token,username})
}else res.json({ok:false})
})
})

app.post("/result",(req,res)=>{
const {username,score}=req.body
db.query(
"INSERT INTO results(username,score) VALUES(?,?)",
[username,score],
()=>res.json({ok:true})
)
})

app.get("/ranking",(req,res)=>{
db.query(
"SELECT username,score FROM results ORDER BY score DESC LIMIT 5",
(err,r)=>res.json(r)
)
})

app.listen(3000,()=>console.log("서버 실행됨 3000"))
