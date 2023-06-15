const list = document.getElementById("list");
const taskInp = document.getElementById("taskInp");

taskInp.addEventListener("keypress",(key)=>{
    if(key.key === "Enter"){
        if(taskInp.value!="") {
            const li = document.createElement("li");
            li.innerHTML = taskInp.value;
            list.appendChild(li);
            taskInp.value = "";
            const span =  document.createElement("span");
            span.innerHTML = "×";
            li.appendChild(span);
        }
    }
});
list.addEventListener("click",(ele)=>{
    if(ele.target.tagName === "LI") ele.target.classList.toggle("done");
    else if(ele.target.tagName === "SPAN") ele.target.parentElement.remove();
});

setInterval(() => {
    let items = document.getElementsByTagName("li");
    if(items.length!=0){
        let allDone = true;
        for (let i = 0; i < items.length; i++) {
            if (!items[i].classList.contains("done")) {
            allDone = false;
            break;
            }
        }
        if (allDone) {
            list.innerHTML = "";
            window.alert("Hurray! You are all done fot today.");
        }
    }
}, 1000);
  