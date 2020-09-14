let input = document.querySelector(".block__form-input");
let btn = document.querySelector(".block__form-btn"); 
let blockList = document.querySelector(".block__list");

function createElements(text){

    let newElem = document.createElement("p");
    let deleteSpan = document.createElement("span");

    deleteSpan.className = "block__list-delete";
    deleteSpan.textContent = "delete";
    
    


    newElem.className = "block__list-elem";
    newElem.textContent= text;
    newElem.appendChild(deleteSpan);

    deleteSpan.addEventListener("click", function(){
      blockList.removeChild(newElem);
    });

    blockList.appendChild(newElem); 


}



btn.addEventListener("click", function(e){
    e.preventDefault();
    if(!(input.value === "Введите ваш текст : " || input.value === "")){
        createElements(input.value);
        input.value = " ";  

    }

});

input.addEventListener("focus", function(){
    input.value = "";

});
input.addEventListener("blur", function(){
    if(input.value === "")
    input.value = "Введите ваш текст : ";
});
