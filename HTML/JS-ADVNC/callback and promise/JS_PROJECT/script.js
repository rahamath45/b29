 let formContainer = document.createElement("div");
 let mainContainer=document.getElementById("main");
  let searchContainer=document.createElement("div")
 let listContainer=document.createElement("div");

 listContainer.setAttribute("class","flex justify-start items-center p-4 flex-wrap");


 formContainer.setAttribute("id","form-box");
 formContainer.innerHTML=`
 <form class="shadow-xl w-[700px] h-[400px] border-2 flex flex-col justify-center items-center gap-4">
  <h1 class="text-2xl font-bold">Student Portal Form</h1>
  <input required type="text" id="name-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter students name"/>
  <input required type="text" id="batch-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter batch name"/>
  <input required type="text" id="course-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter course  name"/>
  <button id="save-btn" class="bg-blue-500 p-2 w-36 rounded-sm text-black font-semibold">Save</button>
 </form>`;

searchContainer.innerHTML=`
<form class="flex  items-center gap-2 flex-row ">
<input type="search" id="search-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[70%]" placeholder="Search by students name"/>
<button class="bg-blue-500 p-2 w-36 rounded-sm text-black font-semibold">search</button>
</form> 
`

 mainContainer.append(formContainer,searchContainer,listContainer);

let nameInput = document.getElementById("name-input");
let batchInput = document.getElementById("batch-input");
let courseInput = document.getElementById("course-input");
const saveBtn = document.getElementById("save-btn");
let searchInput=document.getElementById("search-input");
 
function removeInputField(){
    nameInput.value="";
    batchInput.value="";
    courseInput.value=""; 
}
let students_list=[]
 formContainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newStudentobj={
        student_name : nameInput?.value,
        student_batch : batchInput?.value,
          student_course : courseInput?.value,
    };
     if(newStudentobj){
          console.log(newStudentobj);
          students_list.push(newStudentobj);
          removeInputField();
           createStudentCard(newStudentobj);
     }
});
searchContainer.addEventListener("submit", (e)=>{
    e.preventDefault();
let searchName= searchInput.value;
if(searchName==""){
    return;
}
const searchstudents= filterSearchedStudents(searchName);
if(searchstudents.length==0){
    return;  
}
renderAllstudentsCard(searchstudents)
});
searchContainer.addEventListener("input",(e)=>{
  e.preventDefault();
  if(e.target.value==""){
    renderAllstudentsCard(students_list)
  }
})


function createStudentCard(studentobj){
    listContainer.innerHTML +=`
        
        <div class="bg-slate-100 p-4 rounded-lg w-[150px] h-[200px] flex flex-col justify-between shadow-md">
        <div class="text-2xl text-center font-bold">${studentobj.student_name}</div>
        <div> 
        <div class="opacity-75 font-semibold">${studentobj.student_batch}</div>
        <div class="opacity-75 font-semibold">${studentobj.student_course}</div>
        </div>
        </div>
        `;
        
}
function renderAllstudentsCard(studentList){
 listContainer.innerHTML="";
 studentList.map((stud_obj,index,accARR)=>{
    createStudentCard(stud_obj);
 });
}
 if(students_list.length>0){
    renderAllstudentsCard(students_list);
 }

 function filterSearchedStudents(StudName){
  const filterArr=  students_list.filter((filtstudentObj,index,accARR)=>{
       return filtstudentObj.student_name.toLowerCase()==StudName.toLowerCase();
    })
      return filterArr;
 }