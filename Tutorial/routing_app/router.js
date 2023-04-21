const express = require("express");
const route = express.Router();
var accounts = require("./database");

// GET request
route.get('/accounts',(req,res)=>{
    res.json({userData:accounts});
})

// POST request
route.post('/accounts',(req,res)=>{
    const incomingAccount = req.body
    accounts.push(incomingAccount);
    res.json(accounts);
})

route.get('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((account)=>account.id === accountid)

    if(!getAccount){
        res.status(500).send('Account not found');
    } else {
        res.json({userData:[getAccount]})
    }

})

// put http method
route.put('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const body = req.body
    const account = accounts.find((account)=>account.id === accountid)
    const index = accounts.indexOf(account)

    if(!account){
        res.status(500).send("Account not found")
    } else {
        const updatedAccount = {...account,...body}
        //console.log({...account,...body})
        accounts[index] = updatedAccount
        res.send(updatedAccount)
    }
})

// delete request
route.delete('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const newAccounts = accounts.filter((account)=>account.id!=accountid)

    if(!newAccounts){
        res.status(500).send("Account not foundd")
    }else{
        accounts=newAccounts
        res.send(accounts);
    }
})
module.exports = route;