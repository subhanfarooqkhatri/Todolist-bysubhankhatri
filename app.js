const innerHTMLAG = "<p>";
const innerHTMLGZ = '</p><div><button><i class="fa-solid fa-trash fa-xl"></i></button></div>';
function addTask(textValueNow){
  const taskNow = document.createElement("div");
  
  const taskNowB = document.createElement("p");
  taskNowB.innerHTML = textValueNow;
  taskNow.append(taskNowB);
  
  const taskNowC = document.createElement("div");
  
  const taskNowD = document.createElement("button");
  
  const taskNowE = document.createElement("i");
  taskNowE.classList.add("fa-solid");
  taskNowE.classList.add("fa-trash");
  taskNowE.classList.add("fa-xl");
  
  taskNowD.append(taskNowE);
  taskNowD.addEventListener("click", function(){taskNow.remove();});
  taskNowC.append(taskNowD);
  taskNow.append(taskNowC);
  
  document.getElementById("taskList").append(taskNow);
}
addTask("Task 1");