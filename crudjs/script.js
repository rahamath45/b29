 const  textinput = document.getElementById("text-input");
 const  addBtn = document.getElementById("add-btn");
 const listcontainer = document.getElementById("list");

 addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(textinput.value == ""){
        return;
    }
    const listelement = document.createElement("li");
    const spanelement = document.createElement("span");
    spanelement.innerText = `${textinput.value}`;
     const editBtn = document.createElement("button");
     editBtn.innerText="Edit"
    editBtn.onclick = ()=> editfunction(listelement);
    const delBtn = document.createElement("button");
     delBtn.innerText="Delete"
    delBtn.onclick = ()=> Delfunction(listelement);
    listelement.append(spanelement,editBtn,delBtn);
    listcontainer.append(listelement)
    textinput.value ="";
 })

 function editfunction(li){
    const spanvalue = li.querySelector("span");
    let newvalue =prompt("Give me new name");
    spanvalue.innerText = newvalue
 }
 function Delfunction(li){
    li.remove();
 }