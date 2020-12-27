const btnAdd = document.getElementById("addBtn");
const listInput = document.getElementById("listInput");
const list = document.getElementById("list");

if(localStorage.getItem("tasks") === null){
    const initTask = ["Eat Apple", "Drink Kiwi"];
    localStorage.setItem("tasks", JSON.stringify(initTask));
}

const storedTasks = JSON.parse(localStorage.getItem("tasks"));
storedTasks.forEach(function(t){
    const delbtn = document.createElement("button");
    delbtn.className = "delBtn";
    delbtn.innerText = "Del";

    const elementToAdd = document.createElement("li");
    elementToAdd.innerText = t + " ";
    elementToAdd.appendChild(delbtn);

    list.appendChild(elementToAdd);
});

btnAdd.addEventListener("click", function(){
    listInput.value = listInput.value.trim();
    if(listInput.value !== ""){
        let isInList = false;
        const inlist = Array.from(list.children);
        inlist.forEach(function(f){
            const txtCompare = f.innerHTML.replace(" <button class=\"delBtn\">Del</button>", "");
            if(listInput.value === txtCompare){
                isInList = true;
            }
        });

        if(isInList === false){
            const delbtn = document.createElement("button");
            delbtn.className = "delBtn";
            delbtn.innerText = "Del";

            const elementToAdd = document.createElement("li");
            elementToAdd.innerText = listInput.value + " ";
            elementToAdd.appendChild(delbtn);

            list.appendChild(elementToAdd);

            storedTasks.push(listInput.value);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));

            listInput.value = "";
        }else{
            alert("Input already in list");
        }
    }else{
        alert("Please enter listInput");
    }
});

document.body.addEventListener("click", function(e){
    if(e.target.className === "delBtn"){
        e.target.parentElement.remove();
        
        const taskText = e.target.parentElement.innerHTML.replace(" <button class=\"delBtn\">Del</button>", "");
        const toRemoved = storedTasks.indexOf(taskText);
        storedTasks.splice(toRemoved, 1);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
})