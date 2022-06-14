

mathFunction = ["*","/","-","+"];
const myButtons = document.querySelectorAll(".num");
let myText = document.querySelector(".inputText");
let numberOfButtons = document.querySelectorAll(".num").length;




for(let i = 0; i < numberOfButtons ; i++){
    myButtons[i].addEventListener("click",function(){
         
        myText.value += myButtons[i].value;
              
    });
}
// clear it all
document.querySelector(".clearit").addEventListener("click",function(){
    myText.value ='';
})

// Backspacing when typing the wrong number
document.querySelector(".backspace").addEventListener("click",function(){
    var str = myText.value;
    myText.value = str.slice(0, str.length - 1);
    myText.value;
})

// when pressing the "calculate it" button
document.querySelector(".calculateit").addEventListener("click",function(){
    try{
    myText.value = eval(myText.value);
    } catch{
        myText.value = 'Error!';
    }
})






