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