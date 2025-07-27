
function createData(name, age){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(age>30){
                rej({error:"Rejected your request"})
            }else{
              res({name, age})
            }
        }, 2000)
    })
}
let DB = [{name:"pra", age:"22"}]

function pushToDb(data){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
                if(data.name == "praveen"){
            rej({error:"user already exist"})
        }else {
            DB.push(data);
            res(DB)
        }
        }, 2000)
    })
    
}

console.log("started");
createData("praveen", 21)
.then((data)=>{
    console.log(data);
return data})
.then((data2)=>  pushToDb(data2))
.then((dbdata)=>{
    console.log(dbdata)
})
.catch((err)=>{
    console.log(err)
})

