 let mainContainer = document.getElementById("main");
 let cardList = document.createElement("div");
cardList.setAttribute("class","cardList");


function createNewcard(value){
    cardList.innerHTML += `
    <div class="card">
     <img  class="card-image" src=${value.flags.png} alt=${value.name.common}/>
     <div class="card-name">${value.name.common}</div>
    </div>
    `
}

function renderAllCard(countryArr){
    console.log(countryArr);
    countryArr.map((value)=>{
        createNewcard(value)
    })
}

fetch("https://restcountries.com/v3.1/independent?status=true",{
    method:"GET"
}).then((response)=>response.json())
.then((data)=>{renderAllCard(data)})
.catch((err)=>{
    console.log(err)
})

async function checkone(){
    try{
       let response =  await fetch("https://restcountries.com/v3.1/independent?status=true",{
                      method:"GET"})
        let data =    await response.json();  
          renderAllCard(data)          
    }
    catch(err){
         console.log(err)
    }
}

mainContainer.append(cardList);

let someArr = ["value1","value2","value3"];
console.log(...someArr);

let someobj = {
    key1:"value1",
    key2:{
        anotherkey:"value5"
    }
};

function someFunc(part1,part2,part3){
    console.log(part1);
     console.log(part2);
      console.log(part3);
}
someFunc(...someArr);

function somerest(...part1){
    console.log(part1);
    // console.log(part2);
}
somerest("value1","value2","value3");

const arr1=["a","b","c"];
const arr2=["d","e","f"];
const newarr =[...arr1,...arr2];
console.log(...newarr);

const newobj ={
    name:"newobj",
    ...someobj
}
console.log(newobj)

let [ind1,ind2,ind3]= someArr;
console.log(ind1)
console.log(ind2)
console.log(ind3)

const {key1:newkey}= someobj;
console.log(newkey)
