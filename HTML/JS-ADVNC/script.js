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
