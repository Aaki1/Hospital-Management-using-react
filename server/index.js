const express=require('express')
const mysql=require('mysql')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors())


app.listen(3000)

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mern'
})

app.post('/login',(req,res)=>{
    const que="SELECT * FROM emplogin WHERE uname=? and pwd=?"
    const uname=req.body.uname
    const pwd=req.body.pwd

    con.query(que,[uname,pwd],(err,result)=>{

        if(err){
            throw err
        }
        if(result.length>0){
            res.send({Login:true})
        }else{
            res.send({Login:false})
        }
    })

})

app.post('/Reg',function(req,res)
{
    const name=req.body.name
    const age=req.body.age
    const gender=req.body.gender
    const phn=req.body.phn
    const addr=req.body.addr
   
    con.query("insert into reg (name,age,gender,phn,addr) values(?,?,?,?,?)",[name,age,gender,phn,addr],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Inserted Successfully")
        }
    })
})

app.post('/appoint',function(req,res)
{
    const name=req.body.name
    const age=req.body.age
    const gender=req.body.gender
    const doa=req.body.doa
    const phn=req.body.phn
    const email=req.body.email
    const addr=req.body.addr
    const des=req.body.des
   
    con.query("insert into appo (name,age,gender,doa,phn,email,addr,des) values(?,?,?,?,?,?,?,?)",[name,age,gender,doa,phn,email,addr,des],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Inserted Successfully")
        }
    })
})





