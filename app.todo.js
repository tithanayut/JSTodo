const btnAdd = document.getElementById("addBtn");
const listInput = document.getElementById("listInput");
const list = document.getElementById("list");

btnAdd.addEventListener("click", function(){
    if(listInput.value !== ""){

        let isInList = false;
        const inlist = Array.from(list.children);
        inlist.forEach(function(f){
            const txtCompare = f.innerHTML.replace(" <button id=\"delBtn\">Del</button>", "");
            if(listInput.value === txtCompare){
                isInList = true;
            }
        });

        if(isInList === false){
            const delbtn = document.createElement("button");
            delbtn.id = "delBtn";
            delbtn.innerText = "Del";

            const elementToAdd = document.createElement("li");
            elementToAdd.innerText = listInput.value + " ";
            elementToAdd.appendChild(delbtn);

            list.appendChild(elementToAdd);
        }else{
            alert("Input already in list");
        }

        listInput.value = "";
        
    }else{
        alert("Please enter listInput");
    }
});

document.body.addEventListener("click", function(e){
    if(e.target.id === "delBtn"){
        e.target.parentElement.remove();
    }
})

