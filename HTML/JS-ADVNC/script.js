 function task1(cb) {
  //let cb = task2
  console.log("Task 1 started");
  setTimeout(() => {
    console.log("Task1 completed");
    cb();
  }, 2000);
}

function task2(cb) {
  console.log("Task2 started");
  console.log("Task2 completed");
  cb();
}
function task3(cb) {
  console.log("Task3 started");
  setTimeout(() => {
    console.log("Task3 completed");
    cb();
  }, 3000);
}
function task4(cb) {
  console.log("Task4 started");
  setTimeout(() => {
    console.log("Task4 completed");
    cb();
  }, 2000);
}
function task5() {
  console.log("Task5 started");
  setTimeout(() => {
    console.log("Task5 completed");
  }, 1000);
}

//calback hell or inversion of control
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});


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

let arrFn = (num1, num2) => num1*num2;

let result = arrFn(2,3);
console.log(result)
//consumer 
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

createData("sanjay", 21)
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

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let allNames = ["moorthy"];
//function which check for the name in allNames=[]
//if we already have a name rej (username already exist)
//else username verified sucessfully
function verifyData(username){
    return new Promise((res, rej)=>{
        console.log("normalizedName : ", username)
        setTimeout(()=>{
            if(allNames.includes(username)){
               rej({error:"username already taken"}) 
            } else {
                res({status:"success", response:"User verified sucessfully", username:username})
            }
        }, 2000)
    })
}

//if array exceed length 5 na reject or else updated the data 
function updateToDB(username){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
                   if(allNames.length >=5) {
            rej({error:"Db limit exceeded"})
        }else{
            allNames.push(username)
            res({status:"success", response :"User added to the DB", data:allNames})
        }
        }, 2000)
    })
}
function normalizeData(name){
    return name.toLowerCase();
}

//async and await 
async function updatedUserToDB(name){
    try{
        let normalizedUsername = normalizeData(name)
        let result = await verifyData(normalizedUsername);
        console.log("Verify", result)
        let dbResponse = await updateToDB(result.username)
        console.log("DB", dbResponse)
    }catch(err){
        console.log(err)
    }
}

 // updatedUserToDB("moorthy");

verifyData("Sanjay").then((data)=> {
console.log(data);
return data.username})
 .then((data)=> updateToDB(data))
.then((result)=>console.log(result))
.catch((err)=>{
   console.log(err)
})