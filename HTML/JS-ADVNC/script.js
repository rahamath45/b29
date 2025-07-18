let maincontainer= document.getElementById("main");
console.log(maincontainer);
maincontainer.innerText="hello guvi";
maincontainer.style.background="red";
//id,class,div
let classelement=document.getElementsByClassName("element");
console.log(classelement[0]);
classelement[0].style.background="green";
console.log(classelement[1]);

let tagname=document.getElementsByTagName("div");
console.log(tagname)

let queryelement=document.querySelector("div");
console.log(queryelement);
let allqueryelement=document.querySelectorAll(".element");
console.log(allqueryelement);

let container=document.getElementById("container");

container.style.border=" 1px solid black";
container.style.padding="10px";
container.style.margin="0 auto";
container.style.width="500px";
container.style.height="max-height";
container.style.display="flex";
container.style.flexDirection="column";
container.style.gap="2rem";
container.style.justifyContent="center";
container.style.alignItems="center";

container.innerHTML=`
   <h1>hello guvi</h1>
   <p>hello how are you everyone thank ypu so much</p>
   <button class="element">save</button>
   `;

  let newcontainer=document.createElement("div") ;
  newcontainer.setAttribute("class","newEle");
  newcontainer.innerText="im a new element";
  console.log(newcontainer);

  let anchorElement=document.createElement("a");
  anchorElement.setAttribute("href","https://google.com");
  anchorElement.setAttribute("target","_blank");
  anchorElement.innerText="GOOGLE";
  console.log(anchorElement);

  //appendchild(olderone)
 // let childelement=document.body.appendChild(newcontainer);
 // console.log(childelement);

  //append
  //not return
  document.body.append(newcontainer,anchorElement)

const input=document.querySelector("input");
const toogleBTN=document.querySelector("#pass-check");

function toogleEvent(){
   const inputType=input.getAttribute("type");
   if(inputType=="password"){
      input.setAttribute("type","text");
      toogleBTN.innerText="hide";
   }else{
       input.setAttribute("type","password");
      toogleBTN.innerText="show";
   }
}

toogleBTN.addEventListener("click",()=>{
   toogleEvent();
});


function getAndInvoke(nameofFN,fn){
   console.log(nameofFN);
   fn();
}

function someFN(name){
   console.log("somefn is called by",name);

}
getAndInvoke("tickFN",() =>{
     someFN("ansari");
});

