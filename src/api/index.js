import axios from './axios'

//login
export const login =(phone,password)=> axios.post('/login',{phone:phone,password:password})
//register
export const register =(nickname,phone,code,msgId,password,tradepassword,invatation)=> axios.post('/register',{nickname:nickname,phone:phone,code:code,msgId:msgId,password:password,tradepassword:tradepassword,invatation:invatation});
//sms-send
export const smsSend = (phone)=>axios.post('/sms-send',{phone:phone});
//nametrue
export const nametrue = (name,mobile,idcard,bankcard)=>axios.post('/nametrue',{name:name,mobile:mobile,idcard:idcard,bankcard:bankcard})
//checknametrue
export const checknametrue = ()=>axios.post('/checknametrue',{})
//getcomputer
export const getcomputer = ()=>axios.post('/computer',{})
//buycomputer
export const buycomputer = (id)=>axios.post('/buycomputer',{id:id})
//mycomputer
export const mycomputer = ()=>axios.post('/mycomputer',{})
//bindzfpay
export const bindzfpay = (zfpay)=>axios.post('/bindzfpay',{zfpay:zfpay})
//recover
export const recover = ()=>axios.post("/recover",{})
//getTop
export const getTop = (tag)=>axios.post("/top",{tag:tag})
