//Varibbles
let theInput = document.querySelector(".add-task input");

let theaddbutton = document.querySelector(".add-task .plus");
let taskcontainer = document.querySelector(".tsk-content");
let notaskMsg = document.querySelector(".no_task_message");
let taskcount = document.querySelector(".tsk-count span");
let taskCompleted = document.querySelector(".completed-tas span");
let conteeeee=document.querySelector('.tsk-count span')

let i=0;
let j=0
//focus after load page
window.onload = function () {
  theInput.focus();
};

//add task
theaddbutton.onclick = function () {
  if (theInput.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The input Text is Empty!",
    });
  } else {

    conteeeee.innerHTML= ++i;

    /*if(theInput.value==$("box.tsk").contents()){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The input Text is dublicated!",
          });
    }
    
    else{*/
    notaskMsg.remove();
    let mainspan = document.createElement("span");

    let deleteElemnt = document.createElement("span");

    let text = document.createTextNode(theInput.value);

    let deletetext = document.createTextNode("Dlete");


    mainspan.appendChild(text);
    mainspan.className = "box-tsk";

    deleteElemnt.appendChild(deletetext);
    deleteElemnt.className = "delete";

    mainspan.appendChild(deleteElemnt);
 
    taskcontainer.appendChild(mainspan);
    
    
    theInput.value = "";
    theInput.focus();
}
    
    
 //}
};
let Delete_all =document.createElement("span");
let deleteText= document.createTextNode("Daete All")
Delete_all.appendChild(deleteText);
Delete_all.className="dleteAll";


document.addEventListener('click',function(e){
    if(e.target.className=="delete"){
        
        e.target.parentNode.remove();
        conteeeee.innerHTML= --i;
    }
    if(e.target.classList.contains("box-tsk")){
      
       if( e.target.classList.toggle("finish")==true){
        taskCompleted.innerHTML= ++j;
       }
       else{
        taskCompleted.innerHTML= --j;
       }

    } 
}) 
