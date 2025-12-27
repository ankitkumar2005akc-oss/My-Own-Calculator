let display=document.getElementById("display");
//Add text to screen
function press(num){
    display.value+=num;
}
// Clear screen
function clearScreen(){
    display.value="";
}
//for backspace
function backspace(){
    display.value=display.value.slice(0,-1);
}
//calculate result
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
//Bonus Keyboard Support
document.addEventListener("keydown", function(event){
    let key=event.key;
    if(!isNaN(key) || "+-*/.".includes(key)){
        press(key);
    }
    if(event.key==="Enter"){
        calculate();
    }
    if(event.key==="Backspace"){
        // display.value=display.value.slilce(0, -1);
        backspace();
    }
    if(key==="Escape"){
        clearScreen();
    }
});