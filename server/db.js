const mysql=require("mysql2")

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"testapp"
})

db.connect(err=>{
if(err)console.log(err)
else console.log("DB 연결완료")
})

module.exports=db
